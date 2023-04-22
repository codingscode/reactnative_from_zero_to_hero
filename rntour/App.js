
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'




function App() {
   const [name, setName] = useState('')
   const [submitted, setSubmitted] = useState(false)

   const onPressHandler = () => {
      setSubmitted(!submitted)
   }

   return (
      <View style={styles.body} >
         <Text style={styles.text} >
            Please write your name:
         </Text>
         <TextInput style={styles.input} placeholder='e.g. John' 
            onChangeText={(value) => setName(value)} 
             />
         <TouchableHighlight style={styles.button} onPress={onPressHandler} activeOpacity={0.4} underlayColor='#dddddd' >
            <Text style={styles.text} >
               {submitted ? 'Clear' : 'Submit'}
            </Text>
         </TouchableHighlight>
         {submitted ? 
           <Text style={styles.text} >
             You are registered as {name}
           </Text>
          : null}
         
      </View>
      
      )
      {/* <Button title={submitted ? 'Clear' : 'Submit'} onPress={onPressHandler} color={submitted ? 'red' : 'lightgreen'} /> */}
   }

const styles = StyleSheet.create({
   body: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center'
   },
   text: {
      color: 'black',
      fontSize: 20,
      margin: 10,
   },
   input: {
      width: 200,
      borderWidth: 1,
      borderColor: '#555',
      borderRadius: 5,
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 10
   },
   button: {
      width: 150,
      height: 50,
      backgroundColor: '#00ff00',
      alignItems: 'center'
   }
   
   
})

export default App

