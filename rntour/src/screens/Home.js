
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Pressable, StyleSheet, Text, View  } from 'react-native'
import GlobalStyle from '../utils/GlobalStyle'


const Home = ({navigation, route}) => {
    const [name, setName] = useState('')
   
    const onPressHandler = () => {
       navigation.navigate('Screen_B')
       //navigation.openDrawer()
    }
    
    useEffect(() => {
       getData()
    }, [])

    const getData = () => {
       try {
          AsyncStorage.getItem('UserName')
             .then(value => {
                if (value != null) {
                   setName(value)
                }
             })
       }
       catch(error) {
          console.log(error)
       }
    }
    
    return (
       <View style={styles.body} >
          <Text style={[ GlobalStyle.CustomFont, styles.text]} >
             Welcome {name} !
          </Text>


       </View>
    )
}

const styles = StyleSheet.create({
    body: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    },
    text: {
       fontSize: 40,
       //fontWeight: 'bold', // tirando isso funciona
       margin: 10,
       color: 'black',
       
    }
    
})

export default Home
