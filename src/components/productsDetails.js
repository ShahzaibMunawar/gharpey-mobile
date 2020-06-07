import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { Container, Header, Content, Card, CardItem, Body } from "native-base";

const ResultsDetails = ({ result }) => {
  var img = result.featured_image.replace("public", "storage");
  return (
    <Container style={styles.container}>
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Image
                style={styles.image}
                source={{ uri: "http://sydiatech.com/" + img }}
              />
              <View style={styles.TextArea}>
                <Text style={styles.name}>{result.name} </Text>
                <Text style={styles.review}>
                  Price: {result.price} - Seller: {result.seller.name}
                </Text>
              </View>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
    // <View style={styles.container}>
    //   <Image
    //     style={styles.image}
    //     source={{ uri: "http://sydiatech.com/" + img }}
    //   />
    //   <View style={styles.TextArea}>
    //     <Text style={styles.name}>{result.name} </Text>
    //     <Text style={styles.review}>Price: {result.price}</Text>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 210
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5
  },
  name: {
    fontWeight: "bold",
    maxWidth: 250
  },
  review: {},
  TextArea: {
    paddingTop: 10,
    height: 50
  }
});

export default ResultsDetails;
