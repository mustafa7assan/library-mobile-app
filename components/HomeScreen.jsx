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
        })}Card
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
    title: "Friends, Lovers, and the Big Terrible Thing",
    author: "Matthew Perry ",
    cover: require("../assets/img/cover-9.jpg"),
    pages: 272,
    published: 2022,
    language: "English",
    price: 13.67,
    description:
      "So begins the riveting story of acclaimed actor Matthew Perry, taking us along on his journey from childhood ambition to fame to addiction and recovery in the aftermath of a life-threatening health scare. Before the frequent hospital visits and stints in rehab, there was five-year-old Matthew, who traveled from Montreal to Los Angeles, shuffling between his separated parents; fourteen-year-old Matthew, who was a nationally ranked tennis star in Canada; twenty-four-year-old Matthew, who nabbed a coveted role as a lead cast member on the talked-about pilot then called Friends Like Us. . . and so much more.",
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

  {
    title: "The Storyteller",
    author: "Dave Groh",
    cover: require("../assets/img/cover-10.jpg"),
    pages: 384,
    published: 2021,
    language: "English",
    price: 9.74,
    description:
      "So, I've written a book Having entertained the idea for years, and even offered a few questionable opportunities (It's a piece of cake! Just do 4 hours of interviews, find someone else to write it, put your face on the cover, and voila!) I have decided to write these stories just as I have always done, in my own hand. The joy that I have felt from chronicling these tales is not unlike listening back to a song that I've recorded and can't wait to share with the world, or reading a primitive journal entry from a stained notebook, or even hearing my voice bounce between the Kiss posters on my wall as a child. ",
  },

  {
    title: "And There Was Light",
    author: "Jon Meacham",
    cover: require("../assets/img/cover-6.jpg"),
    pages: 720,
    published: 2022,
    language: "English",
    price: 35.0,
    description:
      "A president who governed a divided country has much to teach us in a twenty-first-century moment of polarization and political crisis. Hated and hailed, excoriated and revered, Abraham Lincoln was at the pinnacle of American power when implacable secessionists gave no quarter in a clash of visions bound up with money, race, identity, and faith. In him we can see the possibilities of the presidency as well as its limitations",
  },
  {
    title: "Quiet",
    author: "Susan Cain",
    cover: require("../assets/img/cover-7.jpg"),
    pages: 368,
    published: 2013,
    language: "English",
    price: 13.76,
    description:
      "At least one-third of the people we know are introverts. They are the ones who prefer listening to speaking; who innovate and create but dislike self-promotion; who favor working on their own over working in teams. It is to introverts—Rosa Parks, Chopin, Dr. Seuss, Steve Wozniak—that we owe many of the great contributions to society.",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah",
    cover: require("../assets/img/cover-8.jpg"),
    pages: 469,
    published: 2015,
    language: "English",
    price: 21.22,
    description:
      "Most books about the history of humanity pursue either a historical or a biological approach, but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 years ago with the appearance of modern cognition. From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, Sapiens integrates history and science to reconsider accepted narratives, connect past developments with contemporary concerns, and examine specific events within the context of larger ideas.",
  },
];
export default HomeScreen;
