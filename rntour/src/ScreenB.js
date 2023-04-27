
import React from 'react'
import { Pressable, StyleSheet, Text, View  } from 'react-native'




const ScreenB = ({navigation}) => {
      
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
       margin: 10,
       color: 'black'
    }
    
})


export default ScreenB



