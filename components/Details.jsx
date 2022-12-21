import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Details = ({ navigation, route }) => {
  const book = route.params.book;
  return (
    <View style={styles.container}>
      <View style={styles.bookImg}>
        <Image style={styles.cover} source={book.cover}></Image>
      </View>
      <View style={styles.details}>
        <View style={styles.bookHeader}>
          <View style={{ flex: 2 }}>
            <Text style={styles.title}>{book.title.toUpperCase()}</Text>
            <Text style={styles.author}>by {book.author}</Text>
          </View>
          <Text style={styles.priceBox}>
            $<Text style={styles.price}>{book.price}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0ea5e9",
    paddingBottom: 0,
  },
  bookImg: {
    height: 400,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cover: {
    width: 250,
    height: "100%",
    borderRadius: 10,
  },
  details: {
    flex: 1,
    elevation: 50,
    shadowColor: "#000",
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 20,
  },
  bookHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  priceBox: {
    color: "#0ea5e9",
    flex: 1,
    textAlign: "right",
  },
  price: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0ea5e9",
  },
  author: {
    fontWeight: "600",
    color: "gray",
  },
});
export default Details;
