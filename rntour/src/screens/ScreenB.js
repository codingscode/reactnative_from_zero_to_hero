
import React from 'react'
import { Pressable, StyleSheet, Text, View  } from 'react-native'
import GlobalStyle from '../utils/GlobalStyle'



const ScreenB = ({navigation, route}) => {
    
    const { ItemName, ItemId } = route.params
      
    const onPressHandler = () => {
       navigation.navigate('Screen_A', {Message: 'message from B'})
       //navigation.goBack()
       //navigation.setParams({ ItemId: 14 })
    }

    return (
       <View style={styles.body} >
          <Text style={[GlobalStyle.CustomFont, styles.text]} >
             Screen B
          </Text>
          <Pressable onPress={onPressHandler} style={({ pressed }) => ({ backgroundColor: pressed ? 'yellow' : '#0f0' }) } >
             <Text style={GlobalStyle.ButtonText} >
                Go back to Screen A
             </Text>

          </Pressable>
          <Text style={styles.text} >{ItemName}</Text>
          <Text style={styles.text} >ID: {ItemId}</Text>
       </View>
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
       //fontWeight: 'bold',
       margin: 10,
       color: 'black',
       
    }
    
})


export default ScreenB



