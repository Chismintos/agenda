import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { validateEmail } from '../utils/validations';
import React, { useState } from 'react';
import firebase from "firebase/compat";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    });

    const [errores, setErrores] = useState({});

    const validarDatos = () => {
        if (
            formData.email !== "" &&
            formData.password !== "" &&
            formData.repeatPassword !== ""
        ) {
            if (!validateEmail(formData.email)) {
                console.log("email incorrecto");
                setErrores({ errorCorreo: true });
            }
            if (formData.password !== formData.repeatPassword) {
                console.log("password incorrecto");
                setErrores({ errorPassword: true });
            }

            console.log("los datos pasaron");
            firebase
                .auth()
                .createUserWithEmailAndPassword(formData.email, formData.password);
        } else {
            setErrores({
                errorCorreo: true,
                errorPassword: true,
            });
        }
    };

    return (
        <>
            <Text style={styles.title}>Registro</Text>
            <Text style={styles.label}>Email:</Text>
            <TextInput
                placeholder='Email'
                style={styles.input}
                placeholderTextColor='#cbcbcb'
                onChangeText={(text) => setFormData({ ...formData, email: text })}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
                placeholder='Password'
                style={styles.input}
                placeholderTextColor='#cbcbcb'
                onChangeText={(text) => setFormData({ ...formData, password: text })}
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
                placeholder='Confirm Password'
                style={styles.input}
                placeholderTextColor='#cbcbcb'
                onChangeText={(text) => setFormData({ ...formData, repeatPassword: text })}
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
            />

            {errores.errorCorreo && <Text>Error: Email incorrecto</Text>}
            {errores.errorPassword && <Text>Error: Contraseñas no coinciden</Text>}

            <TouchableOpacity style={styles.btn} onPress={validarDatos}>
                <Text style={styles.texto}>Sumbmit</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        width: "85%",
        padding: 15,
        backgroundColor: "#FEFAE0",
        borderRadius: 15,
        color: 'white',
        fontSize: 16,
        marginVertical: 10,
    },
    btn: {
        width: "85%",
        borderRadius: 12,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        backgroundColor: "#A9B388",
    },
    texto: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
        padding: 15,

    },
    label: {
        fontSize: 16,
        color: "white",
        alignSelf: "flex-start",
        marginLeft: 30,
        marginBottom: 5,
      },
    title: {
        fontSize: 30,
        color: "white",
        marginBottom: 20,
      },
});

export default RegisterForm;
