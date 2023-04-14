
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
         <Button title='Update State' onPress={onPressHandler} ></Button>
      </View>
   )
}

const styles = StyleSheet.create({
   body: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 10,
      borderColor: 'green',
      borderRadius: 10,
      margin: 40
   },
   text: {
      color: 'black',
      fontSize: 20,
      fontStyle: 'italic',
      margin: 10
   }
   
})

export default App

