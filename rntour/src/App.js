
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
               //color = focused ? '#ff8080' : '#00e6e6'
            }
            else if (route.name === 'Screen_B') {
               iconName = 'btc'
               size = focused ? 25 : 20
               //color = focused ? '#00e6ac' : '#cc00cc'
            }
            return (
               <FontAwesome5 name={iconName} size={size} color={color} />
            )
         }
         
      }
   }
   
   const tint = { activeTintColor: '#f0f', inactiveTintColor: '#33ffcc', activeBackgroundColor: '#ffff66', inactiveBackgroundColor: '#808000', showLabel: true, labelStyle: { fontSize: 14 } }
   

   return (
      <NavigationContainer>
         <Tab.Navigator screenOptions={handler} tabBarOptions={tint}  >
            <Tab.Screen name="Screen_A" component={ScreenA}  />
            <Tab.Screen name="Screen_B" component={ScreenB} />
         </Tab.Navigator>
      </NavigationContainer>
   )
   
}


export default App


