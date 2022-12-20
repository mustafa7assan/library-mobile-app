import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBox = () => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Search for books"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 0,
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#cbd5e1",
  },
});

export default SearchBox;
