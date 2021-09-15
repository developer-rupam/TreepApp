/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const { WIDTH, HEIGHT } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        fontFamily: 'Montserrat-Medium',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },

    textWhite: {
        fontFamily: 'Montserrat-Medium',
        color: '#ffffff',
    },
    buttonPrimary: {
        backgroundColor: '#E87B40',
        fontFamily: 'Montserrat-Medium',
        color: '#ffffff',
        borderRadius:50,
        padding:15,
        alignItems:'center',
    },
    buttonSecondary: {
        backgroundColor: '#202A65',
        fontFamily: 'Montserrat-Medium',
        color: '#ffffff',
        borderRadius:50,
        padding:15,
        alignItems:'center',
    },
    inputField: {
        color: '#ffffff',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        justifyContent: 'center',
        paddingLeft:45,
    },
});