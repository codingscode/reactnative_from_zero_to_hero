
import React, { useEffect, useState } from 'react'
//import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import GlobalStyle from '../utils/GlobalStyle'
//import CustomButton from '../utils/CustomButton'
import SQLite from 'react-native-sqlite-storage'
import { useSelector, useDispatch } from 'react-redux'
import { setName, setAge, increaseAge, getCities } from '../redux/actions'




const db = SQLite.openDatabase(
   { name: 'MainDB', location: 'default' },
   () => { },
   error => { console.log(error) }
)


const Home = ({navigation, route}) => {
    const { name, age, cities } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    
    //const [name, setName] = useState('')
    //const [age, setAge] = useState('')
   
    useEffect(() => {
       getData()
       dispatch(getCities())
    }, [])
   
   
    const onPressHandler = () => {
       navigation.navigate('Screen_B')
       //navigation.openDrawer()
    }
    
    

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
                      dispatch(setName(userName))
                      dispatch(setAge(userAge))
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
            //var user = { Name: name }
            //await AsyncStorage.mergeItem('UserData', JSON.stringify(user))
            db.transaction((tx) => {
               tx.executeSql(
                  'UPDATE Users SET Name=?',
                  [name],
                  ()=>{ Alert.alert('Successo!', 'Seus dados foram atualizados!') },
                  error=>{ console.log(error) }
               )
            })
            
         }
         catch(error) {
            console.log(error)
         }
      }
    }
   
    const removeData = async () => {
      try {
         //await AsyncStorage.clear()
         db.transaction((tx) => {
            tx.executeSql(
               "DELETE FROM Users",
               [],
               () => {
                  navigation.navigate('Login')
               },
               error => { console.log(error) }
            )
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
          <FlatList 
             data={cities} renderItem={({item}) => (
                <View>
                   <Text>{item.country}</Text>
                   <Text>{item.city}</Text>
                </View>
             )}
           />
          {/* <Text style={[ GlobalStyle.CustomFont, styles.text]} >
             Sua idade é {age}
          </Text>
          <TextInput style={styles.input} placeholder='Digite seu nome' value={name} onChangeText={(value) => dispatch(setName(value))} />
          <CustomButton title='Update' color='purple' onPressFunction={updateData} />
          <CustomButton title='Remove' color='#f40100' onPressFunction={removeData} />
          <CustomButton title='Aumentar' color='#0080ff' onPressFunction={()=>{dispatch(increaseAge())}} /> */}
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
