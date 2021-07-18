import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Forecast(props){
    return( <View style = {styles.View} >
            <Text style = {styles.Main}>{props.main}</Text>      
            <Text style = {styles.Description}>{props.description}</Text>
            <Text style = {styles.oc}>{props.temp} °C </Text>
        </View>
    
    )
}

const styles = StyleSheet.create({
    Main: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(255,255,255)',
        fontSize: 25,
        margin: 10
    },
    Description: {
        textAlign: 'center',
        color: 'rgb(255,255,255)',
        fontSize: 30,
        margin: 10
    },
    // Temp: {
    //     textAlign: 'center',
    //     color: 'rgb(255,255,255)',
    //     fontWeight: 'bold',
    //     fontSize: 36,
    //     margin: 10
    // },
    oc: {
        textAlign: 'center',
        color: 'rgb(255,255,255)',
        fontWeight: 'normal',
        fontSize: 28
    },
    View: {
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})