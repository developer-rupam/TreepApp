/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { styles } from '../styles/styles';

/* Setting up constant for width to take device's dimensions */
const { width: WIDTH } = Dimensions.get('window');

const Splash = (props) => {
    return (
       <View style={styles.baseContainer}>
           <Text>In Splash</Text>
       </View>
    )
}

export default Splash;

const inStyles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor :'#020862',
    }
})