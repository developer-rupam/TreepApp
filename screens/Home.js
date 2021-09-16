/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Dimensions } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/styles';


const Home = (props) => {
    /* Managing state for component */
    const [tripList, setTripList] = useState([]);

    /** 
     * Method defination to render lists of trip 
     * Data will be coming from API call, initally setting as static list of objects
    **/
    const _renderTripList = ({item}) => {
        let list = [
            {
                id: 1,
                title: 'Trip to Colorado',
                type: 1,
                distance: 200,
                distanceUnit: 1,
                status: 2,
                memebers: [
                    {
                        id: 343,
                        name: 'Joker',
                        phone: '9845678393',
                    },
                    {
                        id: 343,
                        name: 'Joker',
                        phone: '9845678393',
                    },
                    {
                        id: 343,
                        name: 'Joker',
                        phone: '9845678393',
                    },
                ],
            },
            {
                id: 1,
                title: 'Trip to Colorado',
                type: 1,
                distance: 200,
                distanceUnit: 1,
                status: 2,
                memebers: [
                    {
                        id: 343,
                        name: 'Joker',
                        phone: '9845678393',
                    },
                    {
                        id: 343,
                        name: 'Joker',
                        phone: '9845678393',
                    },
                    {
                        id: 343,
                        name: 'Joker',
                        phone: '9845678393',
                    },
                ],
            },
            {
                id: 1,
                title: 'Trip to Colorado',
                type: 1,
                distance: 200,
                distanceUnit: 1,
                status: 2,
                memebers: [
                    {
                        id: 343,
                        name: 'Joker',
                        phone: '9845678393',
                    },
                    {
                        id: 343,
                        name: 'Joker',
                        phone: '9845678393',
                    },
                    {
                        id: 343,
                        name: 'Joker',
                        phone: '9845678393',
                    },
                ],
            },
            {
                id: 1,
                title: 'Trip to Colorado',
                type: 1,
                distance: 200,
                distanceUnit: 1,
                status: 2,
                memebers: [
                    {
                        id: 343,
                        name: 'Joker',
                        phone: '9845678393',
                    },
                    {
                        id: 343,
                        name: 'Joker',
                        phone: '9845678393',
                    },
                    {
                        id: 343,
                        name: 'Joker',
                        phone: '9845678393',
                    },
                ],
            },
        ];

        setTripList(list);
        console.warn('here')
        return (
            <TouchableOpacity style={inStyle.card}>
                <View style={inStyle.cardLeftPanel}>
                    <Image
                        source={require('../assets/icons/surf-van.png')}
                    />
                </View>
                <View style={inStyle.cardRightPanel}>
                    <View>
                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: 'Montserrat-Medium',
                                color: '#ffffff',

                            }}
                        >{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )

    };

    /* Lifecycle Hook */
    useEffect(() => {
        /* Calling method to render all trip list on page load  */
        _renderTripList();
        return () => {
            
        }
    },[]);

    return (

        <View>
            <View style={inStyle.headerContainer} />
            {/* <ScrollView> */}
            {/*  <TouchableOpacity style={inStyle.card}>
                    <View style={inStyle.cardLeftPanel}>
                        <Image
                            source={require('../assets/icons/surf-van.png')}
                        />
                    </View>
                    <View style={inStyle.cardRightPanel}>
                        <View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontFamily: 'Montserrat-Medium',
                                    color: '#ffffff',

                                }}
                            >Road Trip To Colorado</Text>
                        </View>
                    </View>
                </TouchableOpacity> */}
            <FlatList
                data={tripList}
                keyExtractor={item => item.id}
                renderItem={item}
            />


            {/* </ScrollView> */}
        </View>


    );
};

export default Home;
const inStyle = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#202A65',
        fontFamily: 'Montserrat-Medium',
        color: '#ffffff',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        height: Dimensions.get('window').height - (Dimensions.get('window').height * 75 / 100),
        width: Dimensions.get('window').width,
        padding: 40,
    },
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
        left: Dimensions.get('window').width - (Dimensions.get('window').width / 1.64),

    },
    card: {
        backgroundColor: '#202A65',
        margin: 10,
        borderRadius: 20,
        padding: 20,
        flex: 1,
        flexDirection: 'row',
    },
    cardLeftPanel: {
        backgroundColor: '#E87B40',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        padding: 30,
    },
    cardRightPanel: {
        backgroundColor: '#202A65',
        marginLeft: 2,
        paddingRight: 290,
        flexDirection: 'row',
    },
});

