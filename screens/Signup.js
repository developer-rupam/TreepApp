/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/styles';


const SignUp = (props) => {
    /* Managing state for component */
    const [name, setNameField] = useState('')
    const [phone, setPhoneField] = useState('')
    const [password, setPasswordField] = useState('')
    const [confirmPassword, setConfirmPasswordField] = useState('')
    const [errorText,setErrorText] = useState('')

    
    return (
        <ScrollView>
            <View style={styles.baseContainer}>

                <View style={inStyle.primaryContainer}>
                    {/* Logo  */}
                    <View style={inStyle.logoContainer}>

                    </View>
                    {/* Font Input view */}
                    <View style={{ marginTop: 50 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{
                                color: '#ffffff',
                                fontSize: 24,
                                fontFamily: 'Montserrat-Medium',
                            }}>Join Now</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Image
                                source={require('../assets/icons/call.png')}
                                style={{
                                    position: 'absolute', top: 13, left: 0,
                                }}
                            />
                            <TextInput
                                placeholder={'Name'}
                                placeholderTextColor={'#ffffff'}
                                style={styles.inputField}
                                value={phone}
                                onChangeText={(text) => setNameField(text)}
                            />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Image
                                source={require('../assets/icons/call.png')}
                                style={{
                                    position: 'absolute', top: 13, left: 0,
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
                                    position: 'absolute', top: 13, left: 0,
                                }}
                            />
                            <TextInput
                                placeholder={'Password'}
                                secureTextEntry={true}
                                placeholderTextColor={'#ffffff'}
                                style={styles.inputField}
                                value={password}
                                onChangeText={(text) => setPasswordField(text)}
                            />

                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Image
                                source={require('../assets/icons/key.png')}
                                style={{
                                    position: 'absolute', top: 13, left: 0,
                                }}
                            />
                            <TextInput
                                placeholder={'Re-type Password'}
                                secureTextEntry={true}
                                placeholderTextColor={'#ffffff'}
                                style={styles.inputField}
                                value={password}
                                onChangeText={(text) => setPasswordField(text)}
                            />

                        </View>
                        <View style={{ marginTop: 30 }}>
                            <TouchableOpacity
                                style={styles.buttonSecondary}
                            >
                                <Text style={{ color: '#ffff', fontSize: 20 }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={inStyle.secondaryContainer}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
                            <Text style={{
                                fontSize: 20,
                                color: '#ffffff',
                               
                            }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default SignUp;
const inStyle = StyleSheet.create({
    primaryContainer: {
        backgroundColor: '#E87B40',
        fontFamily: 'Montserrat-Medium',
        color: '#ffffff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        padding: 40,
        marginTop: 150,
    },
    secondaryContainer: {
        backgroundColor: '#202A65',
        fontFamily: 'Montserrat-Medium',
        color: '#ffffff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 20,
        marginTop: 30,
        marginRight: -40,
        marginLeft: -40,
        alignItems: 'center',
        height: Dimensions.get('window').height,
    },
    logoContainer: {
        borderRadius: 150 / 2,
        backgroundColor: '#202A65',
        position: 'absolute',
        width: 100,
        height: 100,
        top: -50,
        left: Dimensions.get('window').width - (Dimensions.get('window').width / 1.64)

    }
})

