
import React, { useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'




function App() {
   const [Items, setItems] = useState([
      { key: 1, item: 'Item 1' },
      { key: 2, item: 'Item 2' },
      { key: 3, item: 'Item 3' },
      { key: 4, item: 'Item 4' },
      { key: 5, item: 'Item 5' },
      { key: 6, item: 'Item 6' },
      { key: 7, item: 'Item 7' },
      { key: 8, item: 'Item 8' },
      { key: 9, item: 'Item 9' },
      { key: 10, item: 'Item 10' },
      { key: 11, item: 'Item 11' }
   ])

   const [Refreshing, setRefreshing] = useState(false)

   return (
      <ScrollView refreshControl={<RefreshControl refreshing={Refreshing} />} style={styles.body} >
         {Items.map((item, i) => {
            return (
               <View style={styles.item} key={i} >
                  <Text style={styles.text} >{item.item}</Text>
               </View>
            )})}
      </ScrollView>
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
   text: {
      color: 'black',
      fontSize: 40,
      fontStyle: 'italic',
      margin: 10,
   },
   
   
})

export default App

