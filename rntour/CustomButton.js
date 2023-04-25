
import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'


const MashButton = (props) => {

   return (
    <Pressable onPress={props.onPressFunction} style={[props.color, styles.button]} hitSlop={{ top: 30, bottom: 30, right: 30, left: 30 }} android_ripple={{ color: '#00f' }} >
       <Text style={styles.text} >
          {props.title}
       </Text>
    </Pressable>
   )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
        backgroundColor: 'lightgreen'
    },
    


})

export default MashButton
