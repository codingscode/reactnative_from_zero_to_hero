
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, Text, TextInput, View } from 'react-native'
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
    
    const updateData = async () => {
      if(name.length == 0) {
         Alert.alert('Warning!', 'Por favor escreva seu nome.')
      }
      else {
         try {
            await AsyncStorage.setItem('UserName', name)
            Alert.alert('Successo!', 'Seus dados foram atualizados!')
         }
         catch(error) {
            console.log(error)
         }
      }
   }
    
    return (
       <View style={styles.body} >
          <Text style={[ GlobalStyle.CustomFont, styles.text]} >
             Welcome {name} !
          </Text>
          <TextInput style={styles.input} placeholder='Digite seu nome' value={name} onChangeText={(value) => setName(value)} />
       </View>
    )
}

const styles = StyleSheet.create({
    body: {
       flex: 1,
       alignItems: 'center',
    },
    text: {
       fontSize: 40,
       //fontWeight: 'bold', // tirando isso funciona
       margin: 10,
       color: 'black',
       
    },
    input: {
       width: 300,
       borderWidth: 1,
       borderColor: '#555',
       borderRadius: 10,
       backgroundColor: '#ffffff',
       textAlign: 'center',
       fontSize: 20,
       marginTop: 130,
       marginBottom: 10
    }
    
})

export default Home
