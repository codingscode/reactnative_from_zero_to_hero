
import React, { useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens'
import ScreenA from './ScreenA'
import ScreenB from './ScreenB'


//enableScreens()



function App() {
   
   const Stack = createStackNavigator()
   
   
   return (
         <NavigationContainer>
         <Stack.Navigator  >
            <Stack.Screen name="Screen_A" component={ScreenA}  />
            <Stack.Screen name="Screen_B" component={ScreenB} />
         </Stack.Navigator>
      </NavigationContainer>
   )
   
}


export default App


/* const ScreenA = ({navigation}) => {

   const onPressHandler = () => {
      navigation.navigate('Screen_B')
   }
   
   return (
      <View style={styles.body} >
         <Text style={styles.text} >
         Screen A
         </Text>
         <Pressable onPress={onPressHandler} style={({ pressed }) => ({ backgroundColor: pressed ? 'violet' : '#0f0' }) } >
            <Text style={styles.text} >
               Go to Screen B
               </Text>

            </Pressable>
            </View>
   )
} */

/* const ScreenB = ({navigation}) => {
   
   const onPressHandler = () => {
      //navigation.navigate('Screen_A')
      navigation.goBack()
   }

   return (
      <View style={styles.body} >
         <Text style={styles.text} >
            Screen B
         </Text>
         <Pressable onPress={onPressHandler} style={({ pressed }) => ({ backgroundColor: pressed ? 'yellow' : '#0f0' }) } >
         <Text style={styles.text} >
               Go back to Screen A
            </Text>
            
         </Pressable>
         </View>
      )
   } */
   
   /* const styles = StyleSheet.create({
      body: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
      },
      text: {
         fontSize: 40,
         fontWeight: 'bold',
         margin: 10,
         color: 'black'
      }
      
   }) */

   
   
   

   
   
   
   
   
   