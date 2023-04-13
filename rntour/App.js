
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'




function App() {
  

   return (
      <View style={styles.body} >
         <Text style={styles.text} >React Native</Text>
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
      fontStyle: 'italic'
   }
   
})

export default App
