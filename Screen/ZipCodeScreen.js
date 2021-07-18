import React from 'react'
import { FlatList , View , Text, StyleSheet, TouchableHighlight} from 'react-native'
import { useNavigation } from '@react-navigation/core'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   

   const ZipItem = ({place, code, navigation}) => (
        <TouchableHighlight  onPress= {() => {
            navigation.navigate('Weather',{zipCode: code})
        }}>
            <View style = {styles.zipItem} > 
                 <Text>{place}</Text>
                 <Text >{code}</Text>
            </View>
        </TouchableHighlight>
)
   

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem =  {({item}) => <ZipItem {...item}  navigation = {navigation}/> }
        />
    )
}


const styles = StyleSheet.create({
    zipItem:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop:20,
        marginLeft: 80,
        marginRight:80,
        padding: 10  
    },
    zipPlace:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color:'#fff'
    },
    zipCode: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color:'#fff'
    }
})

