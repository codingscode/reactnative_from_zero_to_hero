
import React, { useState } from 'react'
import { FlatList, RefreshControl, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native'




function App() {
   const [Items, setItems] = useState([
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
      { name: 'Item 4' },
      { name: 'Item 5' },
      { name: 'Item 6' },
      { name: 'Item 7' },
      { name: 'Item 8' },
      { name: 'Item 9' },
      { name: 'Item 10' },
      { name: 'Item 11' }
   ])

   const DATA = [
      {
         title: 'Title 1',
         data: ['Item 1-1', 'Item 1-2', 'Item 1-3']
      },
      {
         title: 'Title 2',
         data: ['Item 2-1', 'Item 2-2', 'Item 2-3']
      },
      {
         title: 'Title 3',
         data: ['Item 3-1']
      },
      {
         title: 'Title 4',
         data: ['Item 4-1', 'Item 4-2']
      }
   ]

   const [Refreshing, setRefreshing] = useState(false)

   const onRefresh = () => {
      setRefreshing(true)
      setItems([...Items, { name: 'Item 69'}])
      setRefreshing(false)
   }

   return (
      <SectionList sections={DATA}
         keyExtractor={(item, index) => index.toString()}
         renderItem={({ item }) => (
            <View style={styles.item} >
               <Text style={styles.text} >{item}</Text>
            </View>
         )}
      
       />
      /*<FlatList data={Items}
         keyExtractor={(item, index) => index.toString()}
         renderItem={({item}, i) => (
            <View style={styles.item} >
               <Text style={styles.text} >{item.name}</Text>
            </View>
         )}
         refreshControl={<RefreshControl refreshing={Refreshing} onRefresh={onRefresh} colors={['red']} />}
       /> */
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

