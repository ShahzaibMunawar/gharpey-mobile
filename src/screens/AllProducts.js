import React, { useState} from "react";
import { StyleSheet, Image, TouchableOpacity, View,Dimensions } from "react-native";
import { Container, Content, Card, CardItem, Thumbnail, Text, Button,Left, Body } from 'native-base';
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import CartItem from "../components/cartItem";
import AllProductDetailsVertical from "../components/AllProductDetailsVertical";
import ProductsDetailVertical from "../components/ProductsDetailVertical";
import Home from "../components/home";
const { height, width } = Dimensions.get('window')
const numColumns = 2;


const AllProducts = ({ navigation,dispatch }) => {
  //we pass null in state when we dont have data by default
  // to get clicked bussiness id
  const result= navigation.getParam("results");
  const title= navigation.getParam("title");
  // console.log("results");
  // console.log(result);
  return (

  <View
  >
      <FlatList
        data={result}
        showsVerticalScrollIndicator={false}
        keyExtractor={result => result.id.toString()}
        numColumns={numColumns}
        renderItem={({ item }) => {
          return (
            <View style={{ paddingLeft: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProductsShowScreen", { item })}
            >
              <ProductsDetailVertical width={width}
                                      name={item.name}
                                      price={item.price}
                                      image={item.featured_image}
                                      seller={item.seller.name}
              />
            </TouchableOpacity>
            </View>

          );

        }}
      />
  </View>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (id) => dispatch({ type: 'ADD_TO_CART', payload: id })
  }
}

const styles = StyleSheet.create({
  // container: {
  //   paddingLeft:10,
  //   paddingRight:10,
  //   flex: 1,
  //   flexDirection: 'row',
  //
  // }
  // ,
  // List: {
  //   marginTop: 10,
  //   marginLeft: 80
  // },
  // text: {
  //   alignContent: "center",
  //   fontWeight: "bold"
  // },
  // title: {
  //   fontSize: 22,
  //   marginLeft: 5,
  //   fontWeight: "bold"
  // }
});

export default connect(null, null)(AllProducts);
{/*<ProductsDetailVertical width={width}*/}
{/*                        name={item.name}*/}
{/*                        price={item.price}*/}
{/*                        image={item.featured_image}*/}
{/*                        seller={item.seller.name}*/}
{/*/>*/}

//
// <View   style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//   <Home width={width}
//         name="The Cozy Place"
//         type="PRIVATE ROOM - 2 BEDS"
//         price={82}
//         rating={4}
//   />
//   <Home width={width}
//         name="The Cozy Place"
//         type="PRIVATE ROOM - 2 BEDS"
//         price={82}
//         rating={4}
//   />
//   <Home width={width}
//         name="The Cozy Place"
//         type="PRIVATE ROOM - 2 BEDS"
//         price={82}
//         rating={4}
//   />
//   <Home width={width}
//         name="The Cozy Place"
//         type="PRIVATE ROOM - 2 BEDS"
//         price={82}
//         rating={4}
//   />
// </View>
