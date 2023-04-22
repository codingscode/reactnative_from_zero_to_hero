
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, TextInput, Pressable } from 'react-native'




function App() {
   const [name, setName] = useState('')
   const [submitted, setSubmitted] = useState(false)

   const onPressHandler = () => {
      setSubmitted(!submitted)
   }

   const colorchanger = ({ pressed }) => {
      return [ { backgroundColor : pressed ? 'orange' : '#00ff00'}, styles.button ]
   }

   return (
      <View style={styles.body} >
         <Text style={styles.text} >
            Please write your name:
         </Text>
         <TextInput style={styles.input} placeholder='e.g. John' 
            onChangeText={(value) => setName(value)} 
             />
         <Pressable onLongPress={onPressHandler} delayLongPress={1000} style={colorchanger} >
            <Text style={styles.text} >
               {submitted ? 'Clear' : 'Submit'}
            </Text>
         
         </Pressable>
         {submitted ? 
           <Text style={styles.text} >
             You are registered as {name}
           </Text>
          : null}
         
      </View>
      
      )
      {/* <TouchableWithoutFeedback onPress={onPressHandler}  >
         <View style={styles.button} >
            <Text style={styles.text} >
               {submitted ? 'Clear' : 'Submit'}
            </Text>
         </View>
      </TouchableWithoutFeedback> */}
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
      alignItems: 'center',
      
   }
   
   
})

export default App

