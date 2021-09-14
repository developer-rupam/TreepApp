/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';

/* Setting up constant for width to take device's dimensions */
const { width: WIDTH } = Dimensions.get('window');

const SignUp = (props) => {
    /* Managing state for component */
    const [showPassword,setPasswordMode] = useState(false)
    const [phone,setPhoneField] = useState('')
    const [password,setPasswordField] = useState('')
    const [errorText,setErrorText] = useState('')

    
 
    return (
       <View style={styles.baseContainer}>
           <Text>In SignUp</Text>
       </View>
    )
}

export default SignUp;

