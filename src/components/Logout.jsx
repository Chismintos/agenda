import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import firebase from "../utils/firebase";
import RegisterContact from "./RegisterContact";
import List from "./List";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Logout = () => {
  const [showForm, setShowForm] = useState(false);

  const closeSession = () => {
    firebase.auth().signOut();
  };

  const formToggle = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const auth = getAuth();
	const currentUser = auth.currentUser;

	if (currentUser) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/auth.user
		// ...
		console.log(typeof currentUser.uid);
	} else {
		// No user is signed in.
	}

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contactsContainer}>
        {showForm ? (
          <RegisterContact showForm={showForm} setShowForm={setShowForm} currentUser={currentUser} />
        ) : (
          <List currentUser={currentUser} />
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={formToggle}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={closeSession}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  mainContainer: {
    flex: 1,
  
  },
  contactsContainer: {
    flex: 14,
    justifyContent: "center",
    alignItems: "center",
    
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "#A9B388",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Logout;
