
import React, { useState } from 'react'
import { Button, Linking, StyleSheet, Text, View } from 'react-native'




function App() {
   const [name, setName] = useState('Aladin')
   const [session, setSession] = useState({ number: 6, title: 'state' })

   const onPressHandler = () => {
      setName('Programando com Mash')
      setSession({ number:7, title: 'Style' })
   }

   return (
      <View style={styles.body} >
         <Text style={styles.text} >{name}</Text>
         <Text style={styles.text} >This is session number {session.number} and about {session.title}</Text>
         <Button title='Update State' onPress={onPressHandler} ></Button>
      </View>
   )
}

const styles = StyleSheet.create({
   body: {
      flex: 1,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'center'
   },
   text: {
      color: '#ffffff',
      fontSize: 20,
      fontStyle: 'italic',
      margin: 10
   }
   
})

export default App

