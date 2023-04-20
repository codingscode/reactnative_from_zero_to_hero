
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'




function App() {
   const [name, setName] = useState('')

   return (
      <View style={styles.body} >
         <Text style={styles.text} >
            Please write your name:
         </Text>
         <TextInput style={styles.input} placeholder='e.g. John' 
            onChangeText={(value) => setName(value)} 
            maxLength={3} editable={true} />
         <Text style={styles.text} >
            Your name is: {name}
         </Text>
      </View>
      
   )
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
      fontSize: 20
   }
   
   
})

export default App

