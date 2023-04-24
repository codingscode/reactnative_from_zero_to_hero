
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, Modal } from 'react-native'




function App() {
   const [name, setName] = useState('')
   const [submitted, setSubmitted] = useState(false)
   const [showWarning, setShowWarning] = useState(false)

   const onPressHandler = () => {
      if (name.length > 3) {
         setSubmitted(!submitted)
      }
      else {
         setShowWarning(true)
      }
   }

   const colorchanger = ({ pressed }) => {
      return [ { backgroundColor : pressed ? 'orange' : '#00ff00'}, styles.button ]
   }

   return (
      <View style={styles.body} >
         <Modal visible={showWarning} onRequestClose={() => setShowWarning(false)} transparent animationType='fade' >
            <View style={styles.centered_view} >
               <View style={styles.warning_modal} >
                  <View style={styles.warning_title} >
                     <Text style={styles.text} >WARNING!</Text>
                  </View>
                  <View style={styles.warning_body} >
                     <Text style={styles.text} >O nome tem que ser maior que 3 caracteres</Text>
                  </View>
                  <Pressable onPress={() => setShowWarning(false)} style={styles.warning_button} android_ripple={{color: 'white'}} >
                     <Text style={styles.text} >OK</Text>
                  </Pressable>
               </View>

            </View>
         </Modal>
         <Text style={styles.text} >
            Please write your name:
         </Text>
         <TextInput style={styles.input} placeholder='e.g. John' 
            onChangeText={(value) => setName(value)} 
             />
         <Pressable onPress={onPressHandler} style={colorchanger} hitSlop={{ top: 30, bottom: 30, right: 30, left: 30 }} android_ripple={{ color: '#00f' }} >
            <Text style={styles.text} >
               {submitted ? 'Clear' : 'Submit'}
            </Text>
         
         </Pressable>
         {submitted ? 
           <Text style={styles.text} >
             You are registered as {name}
           </Text>
          : null}
         
      </View>
      
      )
      {/* <TouchableWithoutFeedback onPress={onPressHandler}  >
         <View style={styles.button} >
            <Text style={styles.text} >
               {submitted ? 'Clear' : 'Submit'}
            </Text>
         </View>
      </TouchableWithoutFeedback> */}
      {/* <Button title={submitted ? 'Clear' : 'Submit'} onPress={onPressHandler} color={submitted ? 'red' : 'lightgreen'} /> */}
   }

const styles = StyleSheet.create({
   body: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center'
   },
   text: {
      color: 'black',
      fontSize: 20,
      margin: 10,
      textAlign: 'center'
   },
   input: {
      width: 200,
      borderWidth: 1,
      borderColor: '#555',
      borderRadius: 5,
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 10
   },
   button: {
      width: 150,
      height: 50,
      alignItems: 'center',
      
   },
   warning_modal: {
      width: 300,
      height: 300,
      backgroundColor: 'lightblue',
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 20
   },
   centered_view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00000099'
   },
   warning_title: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ff0',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20
   },
   warning_body: {
      height: 200,
      justifyContent: 'center',
      alignItems: 'center'
   },
   warning_button: {
      backgroundColor: '#00ffff',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20
   }
   
   
})

export default App

