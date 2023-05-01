
import React from 'react'
import { Pressable, StyleSheet, Text, View  } from 'react-native'





const ScreenA = ({navigation}) => {
   
    const onPressHandler = () => {
       navigation.navigate('Screen_B', {ItemName: 'Item from Screen A', ItemId: 12})
       //navigation.openDrawer()
       
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

export default ScreenA






