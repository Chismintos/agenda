"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import {Button,ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View,} from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { FIRESTORE_DB } from "../utils/firebase";

import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from "dayjs";


const RegisterContact= ({ showForm, setShowForm, currentUser  }) => {
	const [value, setValue] = useState(dayjs());
	const [name, setName] = useState();
	const [phone, setPhone] = useState();
	const [email, setEmail] = useState();

	useEffect(() => {}, []);
	const addUser = async () => {
		const user = await addDoc(collection(FIRESTORE_DB,  currentUser.uid), {
			name: name,
			phone: phone,
			email: email,
			date: value,
		});
		console.log(user);
	};
	

	return (
		<View style={styles.mainContainer}>
			<Text style={styles.titleText}>Registrar Contactos</Text>
			<ScrollView>
				<Text style={styles.text}>Contact Name</Text>
				<View>
					<TextInput
						placeholder="Contact Name"
						style={styles.input}
						placeholderTextColor={"#cbcbcb"}
						onChangeText={(text) => setName(text)}
						value={name}
						secureTextEntry={false}
						autoCapitalize="none"
						autoCorrect={false}
					/>
				</View>
				<Text style={styles.text}>Phone Number</Text>
				<TextInput
					placeholder="Phone"
					style={styles.input}
					placeholderTextColor={"#cbcbcb"}
					onChangeText={(text) => setPhone(text)}
					value={phone}
					secureTextEntry={false}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<Text style={styles.text}>Email</Text>
				<TextInput
					placeholder="Email"
					style={styles.input}
					placeholderTextColor={"#cbcbcb"}
					onChangeText={(text) => setEmail(text)}
					value={email}
					secureTextEntry={false}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<View style={styles.container}>
					<DateTimePicker
						value={value}
						onValueChange={(date) => setValue(date)}
						mode={"date"}
						headerTextStyle={(color = "white")}
					/>
				</View>
				<Button onPress={addUser} title="Add User" disabled={name === ""} />
				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						setShowForm(!showForm);
					}}
				>
					<Text style={styles.textinput}>Ver</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: "100%",
		backgroundColor: "#FEFAE0",
		justifyContent: "center",
		alignItems: "center",
		width: 330,
		padding: 20,
		borderRadius: 20,
		marginTop:44,
	},
	input: {
		width: 250,
		height: 30,
		
		borderRadius: 10,
		color: "black",
		fontSize: 16,
		marginVertical: 5,
	},
	btn: {
		marginTop: 20,
		width: "90%",
		backgroundColor: "#A9B388",
		borderRadius: 12,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		marginHorizontal:11,
	},
	titleText: {
		color: "black",
		fontSize: 20,
		marginBottom: 15,
	},
	text: {
		color: "black",
	},
	textinput:{
		color: 'white'
	}
});

export default RegisterContact;