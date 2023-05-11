
import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TextInput, Alert } from 'react-native'
import CustomButton from '../utils/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'



const Login = ({ navigation }) => {
   const [name, setName] = useState('')

   const setData = async () => {
      if(name.length == 0) {
         Alert.alert('Warning!', 'Por favor escreva seu nome.')
      }
      else {
         try {
            await AsyncStorage.setItem('UserName', name)
            navigation.navigate('Home')
         }
         catch(error) {
            console.log(error)
         }
      }
   }

   return (
      <View style={styles.body} >
         <Image style={styles.logo} source={require('../../assets/asyncstorage.png')} />
         <Text style={styles.text} >Async Storage</Text>
         <TextInput style={styles.input} placeholder='Digite seu nome' onChangeText={(valor) => setName(valor)} />
         <CustomButton title='Login' color='#1eb900' onPressFunction={setData} />
      </View>
   )
}

const styles = StyleSheet.create({
   body: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#0080ff'
   },
   logo: {
      width: 100,
      height: 100,
      margin: 20
   },
   text: {
      fontSize: 30,
      color: '#ffffff'
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

export default Login

