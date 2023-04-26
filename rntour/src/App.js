
import React, { useState } from 'react'
import { StyleSheet, Text, View  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens'

enableScreens()

function App() {
   
   const Stack = createStackNavigator()

   const ScreenA = () => {
      return (
         <View>
            <Text>
               Screen A
            </Text>
         </View>
      )
   }

   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Screen_A" component={ScreenA} />
         </Stack.Navigator>
      </NavigationContainer>      
   )
      
   }

const styles = StyleSheet.create({
   
})

export default App

