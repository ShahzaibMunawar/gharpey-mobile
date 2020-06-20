import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
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
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import CartItem from "../components/SingleCartItem";
import AllProductDetailsVertical from "../components/AllProductDetailsVertical";
import SingleProductWithStars from "../components/SingleProductWithStars";
import Home from "../components/home";
const { height, width } = Dimensions.get("window");
const numColumns = 2;

const AllProducts = ({ navigation, dispatch }) => {
  //we pass null in state when we dont have data by default
  // to get clicked bussiness id
  console.log("In AllProducts");
  const result = navigation.getParam("results");
  const title = navigation.getParam("title");
  console.log("results in all product");
  console.log(result);
  console.log(title);
  // console.log("results");
  // console.log(result);

  return (
    <View>
      <FlatList
        data={result}
        showsVerticalScrollIndicator={false}
        keyExtractor={result => result.id.toString()}
        numColumns={numColumns}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                paddingLeft: 20,
                marginTop: 20,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between"
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductsShowScreen", { item })
                }
              >
                <SingleProductWithStars
                  width={width}
                  name={item.name}
                  price={item.price}
                  image={item.featured_image}
                  seller={item.seller.name}
                  reviewavg={item.reviews_avg}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: id => dispatch({ type: "ADD_TO_CART", payload: id })
  };
};

const styles = StyleSheet.create({});

export default connect(null, null)(AllProducts);
