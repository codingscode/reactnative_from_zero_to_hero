import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { createDrawerNavigator } from '@react-navigation/drawer'

import ScreenA from './ScreenA'
import ScreenB from './ScreenB'
enableScreens()



const Drawer = createDrawerNavigator()


function App() {

   

   return (
      <NavigationContainer>
         <Drawer.Navigator initialRouteName='Screen_A' drawerPosition="right" drawerType="permanent" edgeWidth={500} >
            <Drawer.Screen name="Screen_A" component={ScreenA} />
            <Drawer.Screen name="Screen_B" component={ScreenB} />
         </Drawer.Navigator>
      </NavigationContainer>
   )
   
}


export default App

