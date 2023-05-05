import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screens/Login'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Home from './screens/Home'

enableScreens()

const Stack = createStackNavigator()



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
         <Stack.Navigator initialRouteName='Login' screenOptions={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: 'orange' }, headerTintColor: '#ffffff', headerTitleStyle: {fontSize: 25, fontWeight: 'bold'} }}  >
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={Home} />
         </Stack.Navigator>
      </NavigationContainer>
   )
   
}


export default App
