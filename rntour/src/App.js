
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens'

//enableScreens()



function App() {
   
   const Stack = createStackNavigator()

   const ScreenA = ({navigation}) => {
   
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
   }
   
   const ScreenB = () => {
      return (
         <View style={styles.body} >
            <Text style={styles.text} >
               Screen B
            </Text>
         </View>
      )
   }


   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Screen_A" component={ScreenA} />
            <Stack.Screen name="Screen_B" component={ScreenB} />
         </Stack.Navigator>
      </NavigationContainer>      
   )
      
   }

const styles = StyleSheet.create({
   body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10
   }
   
})

export default App

