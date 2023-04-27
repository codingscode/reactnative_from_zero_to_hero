
import React, { useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import ScreenA from './ScreenA'
import ScreenB from './ScreenB'


//enableScreens()

const Tab = createBottomTabNavigator()



function App() {

   const handler = ({route}) => {
      return {
         tabBarIcon: ({focused, size, color}) => {
            let iconName
            if (route.name === 'Screen_A') {
               iconName = 'autoprefixer'
            }
            else if (route.name === 'Screen_B') {
               iconName = 'btc'
            }
            return (
               <FontAwesome5 name={iconName} />
            )
         }
      }
   }
   
   
   return (
         <NavigationContainer>
         <Tab.Navigator screenOptions={handler} >
            <Tab.Screen name="Screen_A" component={ScreenA}  />
            <Tab.Screen name="Screen_B" component={ScreenB} />
         </Tab.Navigator>
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

   
   
   

   
   
   
   
   
   
