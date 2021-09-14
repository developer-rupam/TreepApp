/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
const {WIDTH, HEIGHT} = Dimensions.get('screen');
export const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#020862',
    },
    textGolden:{
        color: '#D19F57',
        fontSize:40,
        fontFamily : 'Comfortaa-Regular',
    },
});