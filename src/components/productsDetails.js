import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
const ResultsDetails = ({ result }) => {
  // console.log("Item");
  // console.log(result);
  var img = result.featured_image.replace('public','storage');
  // console.log(img);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: 'http://sydiatech.com/'+img }} />
      <Text style={styles.name}>{result.name} </Text>
      <Text style={styles.review}>
        Price: {result.price}
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4
  },
  name: {
    fontWeight: "bold",
    maxWidth: 250
  },
  review: {}
});

export default ResultsDetails;
