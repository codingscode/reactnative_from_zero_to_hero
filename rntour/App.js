
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'




function App() {
   const [name, setName] = useState('Style Test')
   

   const onPressHandler = () => {
      setName('STyle Test is Done!')
   }

   return (
      <View style={styles.body} >
         <Text style={styles.text} >{name}</Text>
         <View style={styles.button} >
            <Button title='Update State' onPress={onPressHandler} ></Button>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   body: {
      width: '100%',
      height: '50%',
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 10,
      borderColor: 'green',
      borderRadius: 10,
      //margin: 40
   },
   text: {
      color: 'black',
      fontSize: 40,
      fontStyle: 'italic',
      margin: 10,
      textTransform: 'uppercase'
   },
   button: {
      width: 150,
      height: 60,
      backgroundColor: 'orange'

      
   }
   
})

export default App

