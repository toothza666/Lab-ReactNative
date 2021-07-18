import React, { useState } from "react"
import { ImageBackground, Text, StyleSheet,View } from 'react-native'
import Forecast from "./Forecast"
import { useEffect } from "react"

export default function Weather(props) {
    
    
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=28c099ab9b2578c63715272399321025`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
            }
        }, [props.zipCode])

    const [forecastInfo, setForecastInfo] = useState({
        main : '-',
        deecription : '-',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('../background.jpg')} style={styles.backdrop}>
                <View style={styles.greenBack}>
                <Text style={styles.msg}>Zip Code {props.zipCode}</Text>
                <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
 );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    greenBack: {
        backgroundColor: 'rgba(0,100,0,0.1)',
        height: '20%',
        width: '100%'
    },
    msg: {
        paddingTop: 20,
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontSize: 20
    },
})
