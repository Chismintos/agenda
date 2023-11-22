import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import RegisterForm from './RegisterForm'
import firebase from '../utils/firebase'

const Auth = () => {
  
  const [show,setShow] = useState(false)
  
  const [dataLogin, setDataLogin] = useState({
		email: "",
		password: "",
	});


  const iniciarSesion = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(dataLogin.email, dataLogin.password);
	};

  return (
    <>

      {
        !show ?
        <>

        <Text style={styles.text}>INICIO DE SECCION</Text>

        <TextInput
							placeholder="E-mail"
							style={styles.input}
							placeholderTextColor={"#cbcbcb"}
							onChange={(e) => setDataLogin({ ...dataLogin, email: e.nativeEvent.text })}
							secureTextEntry={false}
							autoCapitalize="none"
							autoCorrect={false}
						/>
						<TextInput
							placeholder="Password"
							style={styles.input}
							placeholderTextColor={"#cbcbcb"}
							onChange={(e) => setDataLogin({ ...dataLogin, password: e.nativeEvent.text })}
							secureTextEntry={true}
							autoCapitalize="none"
							autoCorrect={false}
						/>

          <TouchableOpacity style={styles.btn} onPress={iniciarSesion}>
            <Text style={styles.texto}>Inciar secion</Text>
          </TouchableOpacity>

          

          <TouchableOpacity style={styles.btn} onPress={()=>{setShow(!show)}}>
            <Text style={styles.texto}>Registrate</Text>
          </TouchableOpacity>
        </>
        : 
        <>
            <RegisterForm show={show} setShow={setShow} />
        </>
      
      }


    </>
  )
}


const styles = StyleSheet.create({
  text:{
    fontSize: 20,
    color: 'white'
  },
  input:{
    width:'80%',
    padding:15,
    backgroundColor:'#0b5351',
    borderRadius: 15,
    fontSize:16,
    marginVertical:10
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
  texto:{
    marginTop: 5,
    marginBottom: 5,
    color:'white',
    fontSize: 20
},
})


export default Auth