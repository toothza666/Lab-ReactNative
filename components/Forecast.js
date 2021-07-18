import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Forecast(props){
    return(
        <View>
            <Text style={styles.City}>{props.name}</Text>
          <View style={styles.Weather_Box_Main}>
            <View style={styles.Weather_Holder_View}>
                <Image tintColor='#FFF' 
                source={{uri:"http://openweathermap.org/img/wn/"+props.icon+"@2x.png",}} 
                style={styles.Weather_Image}/>
                
                <View>
                    <Text style={styles.Main}>{props.main}</Text>
                    <Text style={styles.Description}>{props.description}</Text>
                </View>
            </View>
        </View>
        <View style={styles.Info_Box_View}>
          <View style={styles.Info_Holder_Veiw}>
            <Text style={styles.oc}>{props.temp} °C</Text>
            <Text style={styles.Humidity}> Humidity  {props.humidity}</Text>
          </View>
        </View>
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
    },
    Weather_Box_Main:{
        height:"50%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
      },

      City: {
        fontSize: 20,
        color:"#FFF",
        marginLeft:"5%",
        marginTop:"5%",
        fontWeight:"bold",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    Weather_Holder_View:{
        height:"100%",
        width:"80%",
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius:20,
        alignItems:"center",
        flexDirection:"row"
      },
    Humidity:{
        fontSize:18,
        color:"#0E0301",
        marginLeft:"15%",
        marginTop:"2%"
    },

    Weather_Image:{
        height:"80%",
        width:"50%"
      },

    Info_Box_View:{
        height:"37%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    Info_Holder_Veiw:{
        height:"80%",
        width:"90%",
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius:15
    },
})