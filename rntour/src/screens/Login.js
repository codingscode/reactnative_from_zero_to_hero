
import React from 'react'
import { View, StyleSheet, Text, Image, TextInput } from 'react-native'



const Login = () => {

   return (
      <View style={styles.body} >
         <Image style={styles.logo} source={require('../../assets/asyncstorage.png')} />
         <Text style={styles.text} >Async Storage</Text>
         <TextInput style={styles.input} />
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

