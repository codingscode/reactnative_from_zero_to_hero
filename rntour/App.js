
import React, { useState } from 'react'
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'




function App() {
   const [Items, setItems] = useState([
      { key: '1', name: 'Item 1' },
      { key: '2', name: 'Item 2' },
      { key: '3', name: 'Item 3' },
      { key: '4', name: 'Item 4' },
      { key: '5', name: 'Item 5' },
      { key: '6', name: 'Item 6' },
      { key: '7', name: 'Item 7' },
      { key: '8', name: 'Item 8' },
      { key: '9', name: 'Item 9' },
      { key: '10', name: 'Item 10' },
      { key: '11', name: 'Item 11' }
   ])

   const [Refreshing, setRefreshing] = useState(false)

   const onRefresh = () => {
      setRefreshing(true)
      setItems([...Items, {key: 69, item: 'Item 69'}])
      setRefreshing(false)
   }

   return (
      <FlatList data={Items}
         renderItem={({item}, i) => (
            <View style={styles.item} key={i} >
               <Text style={styles.text} >{item.name}</Text>
            </View>
         )}
       />
      /* {/* <ScrollView refreshControl={<RefreshControl refreshing={Refreshing} onRefresh={onRefresh} colors={['red']} />} style={styles.body} >
         {Items.map((item, i) => {
            return (
               <View style={styles.item} key={i} >
                  <Text style={styles.text} >{item.item}</Text>
               </View>
            )})}
      </ScrollView> */
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

