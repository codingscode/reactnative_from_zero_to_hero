
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Image, TextInput, Alert } from 'react-native'
import CustomButton from '../utils/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SQLite from 'react-native-sqlite-storage'




const db = SQLite.openDatabase(
   { name: 'MainDB', location: 'default' },
   () => { },
   error => { console.log(error) }
)


const Login = ({ navigation }) => {
   const [name, setName] = useState('')
   const [age, setAge] = useState('')

   useEffect(() => {
       createTable()
       getData()
   }, [])

   const createTable = () => {
      db.transaction((tx) => {
         tx.executeSql(
            'CREATE TABLE IF NOT EXISTS Users (ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER)'
         )
      })
   }

   const getData = () => {
      try {
         /*AsyncStorage.getItem('UserData')
            .then(value => {
               if (value != null) {
                  navigation.navigate('Home')
               }
            })*/
         db.transaction((tx) => {
             tx.executeSql(
                "SELECT Name, Age FROM Users",
                [],
                (tx, results) => {
                   var len = results.rows.length
                   if (len > 0){
                      navigation.navigate('Home')
                   }
                }
             )
          })
      }
      catch(error) {
         console.log(error)
      }
   }
   
   const setData = async () => {
      if(name.length == 0 || age.length == 0) {
         Alert.alert('Warning!', 'Por favor preencha seus dados.')
      }
      else {
         try {
            //var user = { Name: name, Age: age }
            //await AsyncStorage.setItem('UserData', JSON.stringify(user))
            await db.transaction(async (tx) => {
               /*await tx.executeSql(
                  `INSERT INTO Users (Name, Age) VALUES (${name}, ${age})`
               )*/
               await tx.executeSql(
                  "INSERT INTO Users (Name, Age) VALUES (?, ?)",
                  [name, age]
               )
            })
            navigation.navigate('Home')
         }
         catch(error) {
            console.log(error)
         }
      }
   }

   return (
      <View style={styles.body} >
         <Image style={styles.logo} source={require('../../assets/sqlite.png')} />
         <Text style={styles.text} >Async Storage</Text>
         <TextInput style={styles.input} placeholder='Digite seu nome' onChangeText={(valor) => setName(valor)} />
         <TextInput style={styles.input} placeholder='Digite sua idade' onChangeText={(valor) => setAge(valor)} />
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
      color: '#ffffff',
      marginBottom: 130
   },
   input: {
      width: 300,
      borderWidth: 1,
      borderColor: '#555',
      borderRadius: 10,
      backgroundColor: '#ffffff',
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 10
   }
   
})

export default Login

