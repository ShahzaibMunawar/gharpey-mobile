import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name} </Text>
      <Text style={styles.review}>
        {result.rating} Stars, {result.review_count} Reviews
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
    fontWeight: "bold"
  },
  review: {}
});

export default ResultsDetails;
