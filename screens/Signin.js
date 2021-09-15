/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/styles';

/* Setting up constant for width to take device's dimensions */
const { width: WIDTH } = Dimensions.get('window');

const SignIn = (props) => {
    /* Managing state for component */
    const [showPassword, setPasswordMode] = useState(false)
    const [phone, setPhoneField] = useState('')
    const [password, setPasswordField] = useState('')
    const [errorText, setErrorText] = useState('')

    /* Method defination for handle login , take email and password as input and call api */
    /* _handleLogin = () => {
        if(phone != '' && password != ''){
            setErrorText('') 
            props.navigation.navigate('Home')
        }else{
            setErrorText('Please provide valid information')
        }
    } */
    return (
        <ScrollView>
            <View style={styles.baseContainer}>

                <View style={inStyle.primaryContainer}>
                    {/* Logo  */}
                    <View style={inStyle.logoContainer}>

                    </View>
                    {/* Font Input view */}
                    <View style={{ marginTop: 70 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{
                                color: '#ffffff',
                                fontSize: 24,
                                fontFamily: 'Montserrat-Medium',
                            }}>Let's Start</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Image
                                source={require('../assets/icons/call.png')}
                                style={{
                                    position: 'absolute', top: 13, left: 0, borderBottomColor: '#ffffff',
                                    borderBottomWidth: 1
                                }}
                            />
                            <TextInput
                                placeholder={'Phone No'}
                                keyboardType='numeric'
                                placeholderTextColor={'#ffffff'}
                                style={styles.inputField}
                                value={phone}
                                onChangeText={(text) => {
                                    let num = text.replace(".", '');
                                    if (isNaN(num)) {
                                        //setErrorText('Please provide valid phone no')
                                    } else {
                                        setPhoneField(num)
                                        // setErrorText('')  
                                    }
                                }
                                }
                            />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Image
                                source={require('../assets/icons/key.png')}
                                style={{
                                    position: 'absolute', top: 13, left: 0, borderBottomColor: '#ffffff', borderBottomWidth: 1,
                                }}
                            />
                            <TextInput
                                placeholder={'Password'}
                                secureTextEntry={!showPassword}
                                placeholderTextColor={'#ffffff'}
                                style={styles.inputField}
                                value={password}
                                onChangeText={(text) => setPasswordField(text)}
                            />

                            {showPassword && <TouchableOpacity onPress={() => setPasswordMode(false)}
                                style={{
                                    position: 'absolute',
                                    top: 13,
                                    right: 0,
                                }}
                            >
                                <Image
                                    source={require('../assets/icons/hidden.png')}

                                />
                            </TouchableOpacity>}
                            {!showPassword && <TouchableOpacity onPress={() => setPasswordMode(true)}  >
                                <Image
                                    source={require('../assets/icons/view.png')}
                                    style={{
                                        position: 'absolute',
                                        top: 13,
                                        right: 0
                                    }}

                                />
                            </TouchableOpacity>}
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <TouchableOpacity
                                style={styles.buttonPrimary}
                            >
                                <Text style={{ color: '#ffff', fontSize: 20 }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={inStyle.secondaryContainer}>
                        <TouchableOpacity
                        onPress={() => props.navigation.navigate('SignUp')}
                        >
                            <Text style={{
                                fontSize: 20,
                                color: '#ffffff',
                               
                            }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default SignIn;
const inStyle = StyleSheet.create({
    primaryContainer: {
        backgroundColor: '#202A65',
        fontFamily: 'Montserrat-Medium',
        color: '#ffffff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        padding: 40,
        marginTop: 300,
    },
    secondaryContainer: {
        backgroundColor: '#E87B40',
        fontFamily: 'Montserrat-Medium',
        color: '#ffffff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 20,
        marginTop: 100,
        marginRight: -40,
        marginLeft: -40,
        alignItems: 'center',
        height: Dimensions.get('window').height,
    },
    logoContainer: {
        borderRadius: 150 / 2,
        backgroundColor: '#E87B40',
        position: 'absolute',
        width: 100,
        height: 100,
        top: -50,
        left: Dimensions.get('window').width - (Dimensions.get('window').width / 1.64)

    }
})

