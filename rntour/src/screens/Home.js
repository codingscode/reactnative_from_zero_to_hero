
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import GlobalStyle from '../utils/GlobalStyle'
import CustomButton from '../utils/CustomButton'
import SQLite from 'react-native-sqlite-storage'




const db = SQLite.openDatabase(
   { name: 'MainDB', location: 'default' },
   () => { },
   error => { console.log(error) }
)


const Home = ({navigation, route}) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
   
    const onPressHandler = () => {
       navigation.navigate('Screen_B')
       //navigation.openDrawer()
    }
    
    useEffect(() => {
       getData()
    }, [])

    const getData = () => {
       try {
          /*AsyncStorage.getItem('UserData')
             .then(value => {
                if (value != null) {
                   let user = JSON.parse(value)
                   setName(user.Name)
                   setAge(user.Age)
                }
             })*/
          db.transaction((tx) => {
             tx.executeSql(
                "SELECT Name, Age FROM Users",
                [],
                (tx, results) => {
                   var len = results.rows.length
                   if (len > 0){
                      var userName = results.rows.item(0).Name
                      var userAge = results.rows.item(0).Age
                      setName(userName)
                      setAge(userAge)
                   }
                }
             )
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
            var user = { Name: name }
            await AsyncStorage.mergeItem('UserData', JSON.stringify(user))
            Alert.alert('Successo!', 'Seus dados foram atualizados!')
         }
         catch(error) {
            console.log(error)
         }
      }
    }
   
    const removeData = async () => {
      try {
            await AsyncStorage.clear()
            navigation.navigate('Login')
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
          <Text style={[ GlobalStyle.CustomFont, styles.text]} >
             Sua idade é {age}
          </Text>
          <TextInput style={styles.input} placeholder='Digite seu nome' value={name} onChangeText={(value) => setName(value)} />
          <CustomButton title='Update' color='purple' onPressFunction={updateData} />
          <CustomButton title='Remove' color='#f40100' onPressFunction={removeData} />
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
