import { View, Text, TextInput,StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        email:'',
        password:'',
        repeatPassword:''
    })
  return (
    <>
     
      <TextInput 
        placeholder='email' 
        style={styles.input} 
        placeholderTextColor={'#cbcbcb'} 
        onChange={e=>setFormData(...formData,{email:e.nativeEvent.text})}
        keyboardType='email-address'
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect={false}
        />

    <TextInput 
        placeholder='Password' 
        style={styles.input} 
        placeholderTextColor={'#cbcbcb'} 
        onChange={e=>setFormData(...formData,{password:e.nativeEvent.text})}
        secureTextEntry={true}
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect={false}
        />

    <TextInput 
        placeholder='Repeat password' 
        style={styles.input} 
        placeholderTextColor={'#cbcbcb'} 
        onChange={e=>setFormData(...formData,{repeatPassword:e.nativeEvent.text})}
        secureTextEntry={true}
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect={false}
        />
       <TouchableOpacity >
            <Text style={styles.texto}>Registrar</Text>
        </TouchableOpacity> 
    </>
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
        marginTop: 20,
        color:'white',
        fontSize: 20
    }
})

export default RegisterForm