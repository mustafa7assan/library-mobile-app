import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
const Card = ({ book, navigation }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardImage}>
        <Image style={styles.cover} source={book.cover}></Image>
      </View>
      <View style={styles.cardText}>
        <Text style={styles.title}>{book.title.toUpperCase()}</Text>
        <Text>
          By <Text style={styles.author}>{book.author}</Text>
        </Text>
        <Text style={styles.description}>
          {book.description.slice(0, 100)} ...{" "}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Details", { book: book });
          }}
        >
          <Text style={styles.buttonText}>More Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 170,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderRadius: 10,
    flexDirection: "row",
    padding: 5,
    marginBottom: 2,
  },
  cardImage: {
    flex: 1,
    borderRadius: 20,
  },
  cover: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
  },
  cardText: {
    flex: 2,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  author: {
    fontSize: 14,
    fontWeight: "700",
  },
  description: {
    fontSize: 10,
  },
  button: {
    backgroundColor: "#0ea5e9",
    borderRadius: 15,
    width: 120,
    marginTop: 5,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    padding: 5,
  },
});

export default Card;
