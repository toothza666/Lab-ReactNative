import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Forecast(props){
    return( <View >
            <Text>{props.main}</Text>      
            <Text>{props.description}</Text>
            <Text>{props.temp}</Text>
            <Text>°C</Text>
        </View>
    
    )
}

const styles = StyleSheet.create({
    textMain: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(255,255,255)',
        fontSize: 36,
        margin: 10
    },
    textDescription: {
        textAlign: 'center',
        color: 'rgb(255,255,255)',
        fontSize: 30,
        margin: 10
    },
    temp: {
        textAlign: 'center',
        color: 'rgb(255,255,255)',
        fontWeight: 'bold',
        fontSize: 36,
        margin: 10
    },
    oc: {
        textAlign: 'center',
        color: 'rgb(255,255,255)',
        fontWeight: 'normal',
        fontSize: 28
    },
    view: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})