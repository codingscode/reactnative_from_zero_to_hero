
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'




function App() {
   const [Items, setItems] = useState([
      { key: 1, item: 'Item 1' },
      { key: 2, item: 'Item 2' },
      { key: 3, item: 'Item 3' },
      { key: 4, item: 'Item 4' },
      { key: 5, item: 'Item 5' },
      { key: 6, item: 'Item 6' },
      { key: 7, item: 'Item 7' },
      { key: 8, item: 'Item 8' }
   ])
   

   return (
      <View style={styles.body} >
         {
            Items.map((item, i) => {
               return (
                  <View style={styles.item} key={i} >
                     <Text style={styles.text} >{item.item}</Text>
                  </View>
               )
            })
         }
         
      </View>
   )
}

const styles = StyleSheet.create({
   body: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'yellow',
   },
   item: {
      margin: 10,
      backgroundColor: 'orange',
      justifyContent: 'center',
      alignItems: 'center'
   },
   view1: {
      width: 100,
      height: 100,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center'
   },
   view2: {
      width: 100,
      height: 100,
      backgroundColor: 'magenta',
      alignItems: 'center',
      justifyContent: 'center'
   },
   view3: {
      width: 100,
      height: 100,
      backgroundColor: 'lightgreen',
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

