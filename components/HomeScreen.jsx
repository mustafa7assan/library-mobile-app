import * as React from "react";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import SearchBox from "./SearchBox";
import Card from "./Card";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <SearchBox></SearchBox>
      <Text style={styles.title}>Books</Text>
      <View style={styles.library}>
        <Image
          style={styles.libraryImg}
          source={require("../assets/img/library.jpg")}
        ></Image>
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {books.map((book, index) => {
          return <Card key={index} book={book} navigation={navigation}></Card>;
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingBottom: 0,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 15,
  },
  library: {
    height: 200,
    elevation: 10,
    shadowColor: "#000",
  },
  libraryImg: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  scroll: {
    elevation: 10,
    shadowColor: "#000",
    marginTop: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: "#fff",
  },
});

const books = [
  {
    title: "Spare",
    author: "Prince Harry",
    cover: require("../assets/img/cover-2.jpg"),
    pages: 416,
    published: 2023,
    language: "English",
    price: 17.99,
    description:
      "It was one of the most searing images of the twentieth century: two young boys, two princes, walking behind their mother’s coffin as the world watched in sorrow—and horror. As Diana, Princess of Wales, was laid to rest, billions wondered what the princes must be thinking and feeling—and how their lives would play out from that point on",
  },
  {
    title: "The Light We Carry",
    author: "Michelle Obama",
    cover: require("../assets/img/cover-1.jpg"),
    pages: 336,
    published: 2022,
    language: "English",
    price: 16.99,
    description:
      "There may be no tidy solutions or pithy answers to life's big challenges, but Michelle Obama believes that we can all locate and lean on a set of tools to help us better navigate change and remain steady within flux. In The Light We Carry, she opens a frank and honest dialogue with readers, considering the questions many of us wrestle with: How do we build enduring and honest relationships? How can we discover strength and community inside our differences? What tools do we use to address feelings of self-doubt or helplessness? What do we do when it all starts to feel like too much?",
  },
  {
    title: "Finding Me",
    author: "Viola Davis",
    cover: require("../assets/img/cover-3.jpg"),
    pages: 304,
    published: 2022,
    language: "English",
    price: 16.99,
    description:
      "This is my story, from a crumbling apartment in Central Falls, Rhode Island, to the stage in New York City, and beyond. This is the path I took to finding my purpose but also my voice in a world that didn’t always see me.",
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    cover: require("../assets/img/cover-4.jpg"),
    pages: 224,
    published: 2016,
    language: "English",
    price: 13.5,
    description:
      "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be positive all the time so that we can truly become better, happier people.",
  },
  {
    title: "Steve Job",
    author: "Walter Isaacson",
    cover: require("../assets/img/cover-5.jpg"),
    pages: 656,
    published: 2011,
    language: "English",
    price: 17.3,
    description:
      "Based on more than forty interviews with Steve Jobs conducted over two years—as well as interviews with more than 100 family members, friends, adversaries, competitors, and colleagues—Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing. Isaacson’s portrait touched millions of readers.    ",
  },
];

export default HomeScreen;
