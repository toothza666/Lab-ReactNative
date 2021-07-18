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
                        name: json.name,
                        icon: json.weather[0].icon,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        humidity: json.main.humidity,
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
            }
        }, [props.zipCode])

    const [forecastInfo, setForecastInfo] = useState({
        name: 'loading...',
        icon: "",
        main : 'loading...',
        deecription : 'loading...',
        temp: 0,
        humidity: 0
    })
    return (
        <View>
            <ImageBackground source={require('../unnamed.jpg')} style={styles.backdrop}>
                <View>
                {/* <View style={styles.blackshade}> */}
                {/* <Text style={styles.msg}>Zip Code {props.zipCode}</Text> */}
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
    // blackshade: {
    //     backgroundColor: 'rgba(0,0,0,0.1)',
    //     height: '50%',
    //     width: '100%'
    // },
    msg: {
        paddingTop: 20,
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontSize: 15
    },
})
