import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body
} from "native-base";
import StarRating from "react-native-star-rating";
import { connect } from "react-redux";

const ProductsShowScreen = ({ navigation, dispatch }) => {
  //we pass null in state when we dont have data by default
  const [result, setResult] = useState(null);
  // to get clicked bussiness id
  const id = navigation.getParam("item");
  var img = id.featured_image.replace("public", "storage/");
  var shopimg =
    "http://sydiatech.com/" + id.seller.shop_image.replace("public", "storage");
  console.log(shopimg);
  var rev: rev[];
  // console.log(shopimg);
  return (
    <Container>
      <Content>
        <Card style={{ width: "100%" }}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: shopimg }} />
              <Body>
                <Text style={styles.text}>Product: {id.name}</Text>
                <Text style={styles.text2}>Price: {id.price}</Text>
                <Text style={styles.text2}>Shop: {id.seller.name}</Text>
                <StarRating
                  disable={true}
                  maxStars={5}
                  rating={Math.floor(id.reviews_avg)}
                  starSize={10}
                />
              </Body>

              <Content></Content>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                style={{ height: 300, width: "100%" }}
                source={{ uri: "http://sydiatech.com/" + img }}
              />

              <Text>
                <Text>{id.description}</Text>
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button
                block
                style={{ width: "100%", backgroundColor: "#61005b" }}
                onPress={() => dispatch({ type: "ADD_TO_CART", payload: id })}
              >
                <Text>Add To Cart</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
        <Card style={{ paddingLeft: 15 }}>
          <Text style={{ fontWeight: "bold" }}>Product Reviews </Text>
          {id.reviews.map(reviewobj => (
            <Text style={{ paddingVertical: 10 }} key={reviewobj}>
              {reviewobj.review}
            </Text>
          ))}
        </Card>
      </Content>
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: id => dispatch({ type: "ADD_TO_CART", payload: id })
  };
};

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 300
  },
  List: {
    marginTop: 10,
    marginLeft: 80
  },
  text: {
    alignContent: "center",
    fontWeight: "bold"
  },
  text2: {
    alignContent: "center"
  }
});

export default connect(null, null)(ProductsShowScreen);
