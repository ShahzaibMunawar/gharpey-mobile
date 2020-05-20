import React, { Component, useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import yelp from "../api/yelp";
import { FlatList } from "react-native-gesture-handler";

const ResultsShowScreen = ({ navigation }) => {
  //we pass null in state when we dont have data by default
  const [result, setResult] = useState(null);
  // to get clicked bussiness id
  const id = navigation.getParam("id");
  // console.log(result);
  // it will make async req to api and get the data from that specific bussienss id
  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
    // console.log(response.data);
  };
  //useEffect hook is only called once when page is loaded
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList
        data={result.photos}
        style={styles.List}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200
  },
  List: {
    marginTop: 10,
    marginLeft: 80
  },
  text: {
    alignContent: "center",
    fontWeight: "bold"
  }
});

export default ResultsShowScreen;
