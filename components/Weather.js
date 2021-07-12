import React, { useState } from "react"
import { ImageBackground, Text, StyleSheet,View } from 'react-native'
import Forecast from "./Forecast"

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main : '-',
        deecription : '-',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('../bg.webp')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
 );
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '80%'
    },
});
