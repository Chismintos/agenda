import { View, Text, TextInput,StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { validateEmail } from '../utils/validations'
import firebase from '../utils/firebase'

const RegisterForm = ({ setShow }) => {

    const [formData, setFormData] = useState({
        email:'',
        password:'',
        repeatPassword:''
    })

    const [errores, setErrores] = useState({
		errorCorreo: false,
		errorPassword: false,
	});

    const validarDatos = () => {
        if (formData.email !== "" && formData.password !== "" && formData.repeatPassword !== "") {

            console.log(formData.email);
            if (!validateEmail(formData.email)) {
                console.log("Email incorrecto");
                setErrores({ errorCorreo: true });
            }
            if (formData.password !== formData.repeatPassword) {
                console.log("Password incorrecto");
                setErrores({ errorPassword: true });
            }

            console.log("los datos pasaron");
            firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password);
        } else {
            setErrores({
                errorCorreo: true,
                errorPassword: true,
            });
        }
    }

  return (
    <>
     
        <Text style={styles.texto}>REGISTRO</Text>

        <TextInput 
            placeholder='email' 
            style={styles.input} 
            placeholderTextColor={'#cbcbcb'} 
            onChange={(e) => setFormData({ ...formData, email: e.nativeEvent.text })}
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            />

        <TextInput 
            placeholder='Password' 
            style={styles.input} 
            placeholderTextColor={'#cbcbcb'} 
            onChange={(e) => setFormData({ ...formData, password: e.nativeEvent.text })}         
            autoCapitalize='none'
            autoComplete='off'
            autoCorrect={false}
            />

        <TextInput 
            placeholder='Repeat password' 
            style={styles.input} 
            placeholderTextColor={'#cbcbcb'} 
            onChange={(e) => setFormData({ ...formData, repeatPassword: e.nativeEvent.text })}         
            autoCapitalize='none'
            autoComplete='off'
            autoCorrect={false}
            />
        
        {errores.errorCorreo && <Text>Error: Email incorrecto</Text>}
        {errores.errorPassword && <Text>Error: Contraseñas no coinciden</Text>}
            
        <TouchableOpacity style={styles.btn} onPress={validarDatos}>
            <Text style={styles.texto}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {setShow(false);}}>
            <Text style={styles.texto}>Regresar</Text>
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

export default RegisterForm