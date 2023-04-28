
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
               size = focused ? 25 : 20
            }
            else if (route.name === 'Screen_B') {
               iconName = 'btc'
               size = focused ? 25 : 20
            }
            return (
               <FontAwesome5 name={iconName} size={size} />
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


