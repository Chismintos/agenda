import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../utils/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const List = ({currentUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
		const userRef = collection(FIRESTORE_DB, currentUser.uid);
		const subscriber = onSnapshot(userRef, {
			next: (snapshot) => {
				const users = [];
				snapshot.docs.forEach((doc) => {
					users.push({
						id: doc.id,
						...doc.data(),
					});
				});
				setUsers(users);
				//console.log(users);
			},
		});
		return () => subscriber();
	}, []);

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.titleCont}>Contactos</Text>
        {users.length > 0 && (
          <View style={styles.contactsCont}>
            {users.map((user) => (
              <View style={styles.contactCard} key={user.id}>
                <Text style={styles.text}>Email: {user.email}</Text>
                <Text style={styles.text}>Name: {user.name}</Text>
                <Text style={styles.text}>Phone: {user.phone}</Text>
              </View>
            ))}
          </View>
        )}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#FEFAE0",
    justifyContent: "center",
    alignItems: "center",
    width: 330,
    borderRadius: 20,
    
  },
  contactsCont: {
    flex: 14,
    gap: 10,
    marginBottom: 25,
  },
  titleCont: {
    fontSize: 20,
    flex: 1,
    color: "black",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 30,
  },
  contactCard: {
    backgroundColor: "#A9B388",
    flexDirection: "column",
    color: "white",
    padding: 10,
    borderRadius: 15,
    width: 285
  },
  text: {
    color: "white",
  },
});

export default List;