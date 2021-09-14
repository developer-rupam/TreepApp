/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';

/* Setting up constant for width to take device's dimensions */
const { width: WIDTH } = Dimensions.get('window');

const SignIn = (props) => {
    /* Managing state for component */
    const [showPassword,setPasswordMode] = useState(false)
    const [phone,setPhoneField] = useState('')
    const [password,setPasswordField] = useState('')
    const [errorText,setErrorText] = useState('')

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
       <View style={styles.baseContainer}>
           <Text style={styles.textGolden}>In SignIn</Text>
       </View>
    )
}

export default SignIn;

