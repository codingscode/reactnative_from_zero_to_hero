
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'




function App() {
   const [name, setName] = useState('Style Test')
   

   const onPressHandler = () => {
      setName('STyle Test is Done!')
   }

   return (
      <View style={styles.body} >
         <View style={styles.view1} >
            <Text style={styles.text} >1</Text>
         </View>
         
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
   },
   view1: {
      width: 100,
      height: 100,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center'
   },
   text: {
      color: 'black',
      fontSize: 40,
      fontStyle: 'italic',
      margin: 10,
   },
   
   
})

export default App

