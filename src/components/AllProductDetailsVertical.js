import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
const AllProductDetailsVertical = ({ result }) => {
  var img = result.featured_image.replace('public','storage');
  // console.log(img);
  return (
    <Container style={{height: 360}}>
      <Content >
        <Card >
          <CardItem>
            <Body style={styles.item}>
                <Image style={styles.image} source={{ uri: 'http://sydiatech.com/'+img }} />
                <Text style={styles.name}>Name: {result.name} </Text>
                <Text style={styles.review}>
                  Price: {result.price}
                </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>

  );
};


const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 400,
    height: 290,
    borderRadius: 5
  },
  name: {
    paddingTop:5,
    fontWeight: "bold"
  },
  item: {
  }
});

export default AllProductDetailsVertical;
