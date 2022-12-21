import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
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
        <View style={styles.bookInfo}>
          <View style={styles.info}>
            <Text style={styles.minInfo}>{book.pages}</Text>
            <Text style={{ color: "#fff" }}>Pages</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.info}>
            <Text style={styles.minInfo}>{book.published}</Text>
            <Text style={{ color: "#fff" }}>Published</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.info}>
            <Text style={styles.minInfo}>{book.language}</Text>
            <Text style={{ color: "#fff" }}>language</Text>
          </View>
        </View>
        <View style={styles.bookDesc}>
          <Text style={styles.desTitle}>Description</Text>
          <ScrollView>
            <Text style={styles.description}>
              {book.description} Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Maiores eaque enim fugit culpa reiciendis nobis
              vitae aliquid debitis, consequatur numquam.
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
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
    color: "#f97316",
    flex: 1,
    textAlign: "right",
  },
  price: {
    fontSize: 28,
    fontWeight: "700",
    color: "#f97316",
  },
  author: {
    fontWeight: "600",
    color: "gray",
  },
  bookInfo: {
    backgroundColor: "#171717",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  info: {
    alignItems: "center",
    color: "#fff",
  },
  minInfo: {
    marginBottom: 5,
    fontWeight: "700",
    color: "#fff",
  },
  divider: {
    width: 2,
    height: "100%",
    backgroundColor: "#fff",
  },
  bookDesc: {
    backgroundColor: "#171717",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  desTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#eee",
    marginVertical: 5,
  },
  description: {
    textAlign: "justify",
    color: "#eee",
  },
});
export default Details;
