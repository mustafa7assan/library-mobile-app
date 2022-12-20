import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Details = ({ navigation, route }) => {
  const book = route.params.book;
  return (
    <View style={styles.container}>
      <View style={styles.bookImg}>
        <Image style={styles.cover} source={book.cover}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingBottom: 0,
  },
  bookImg: {
    height: 400,
    padding: 10,
    backgroundColor: "#0ea5e9",
    justifyContent: "center",
    alignItems: "center",
  },
  cover: {
    width: 250,
    height: "100%",
    borderRadius: 10,
  },
});
export default Details;
