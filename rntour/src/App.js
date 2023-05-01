import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import ScreenA from './ScreenA'
import ScreenB from './ScreenB'
enableScreens()



const Drawer = createDrawerNavigator()

const icondb = ({focused}) => {
   return (
      <FontAwesome5 name='btc' size={focused ? 25 : 20} color={focused ? 'red' : 'lightgreen'} />
   )
}

const iconda = ({focused}) => {
   return (
      <FontAwesome5 name='autoprefixer' size={focused ? 25 : 20} color={focused ? 'yellow' : 'violet'} />
   )
}

function App() {

   

   return (
      <NavigationContainer>
         <Drawer.Navigator initialRouteName='Screen_A' drawerPosition="right" drawerType="permanent" 
             edgeWidth={500} hideStatusBar={true} overlayColor='red' 
             drawerStyle={{ backgroundColor: 'pink', width: 250 }} 
             screenOptions={{ headerShown: true, swipeEnabled: false, gestureEnabled: false, 
                 headerTitleAlign: 'center', headerStyle: { backgroundColor: 'orange' }, headerTintColor: '#ffffff', headerTitleStyle: {fontSize: 25, fontWeight: 'bold'} }}  >
            <Drawer.Screen name="Screen_A" component={ScreenA} options={{ title: 'Screen_A Title', drawerIcon: iconda }} />
            <Drawer.Screen name="Screen_B" component={ScreenB} options={{ title: 'Screen_B Title', drawerIcon: icondb }} />
         </Drawer.Navigator>
      </NavigationContainer>
   )
   
}


export default App

