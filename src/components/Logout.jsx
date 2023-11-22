import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import firebase from '../utils/firebase'

const Logout = () => {

  const closeSession = () => {
		firebase.auth().signOut();
	};


  return (
   
    <TouchableOpacity style={styles.btn} onPress={closeSession}>
      <Text style={styles.texto}>Logout</Text>
    </TouchableOpacity>
  )

}

const styles =  StyleSheet.create({
  input:{
      width:'80%',
      padding:15,
      backgroundColor:'#0b5351',
      borderRadius: 15,
      fontSize:16,
      marginVertical:10
  },
  texto:{
      marginTop: 5,
      marginBottom: 5,
      color:'white',
      fontSize: 20
  },
  btn: {
      backgroundColor: '#3498db',
      paddingVertical:1,
      paddingHorizontal: 30,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      marginTop:10
      
    },
})

export default Logout