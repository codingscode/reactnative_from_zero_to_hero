
import React from 'react'
import { Button, Linking, StyleSheet, Text, View } from 'react-native'




function App() {
  

   return (
      <View style={styles.body} >
         <Text style={styles.text} >React Native</Text>
         <Button title='youtube channel' onPress={() => {Linking.openURL('https:www.google.com')}} ></Button>
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
