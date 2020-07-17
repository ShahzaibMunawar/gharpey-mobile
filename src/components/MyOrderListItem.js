import { REMOVE_FROM_CART, AGJUST_PRICE } from "../../reducers/action";
import React, { Component, useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Input,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
const MyOrderListItem = ({ navigation, result }) => {
  if (result.product.featured_image != null) {
    var img =
      "http://sydiatech.com/" +
      result.product.featured_image.replace("public", "storage");
  } else {
    img = "https://www.wpclipart.com/buildings/shop.png";
  }
  const res = result.created_at.substring(0, 10);
  return (
    <Container style={{ height: 135 }}>
      <Content>
        <Card>
          <CardItem style={{ display: "flex" }}>
            <Thumbnail
              source={{ uri: img }}
              style={{ height: 100, width: 100 }}
            />

            <Body style={{ marginLeft: 15, marginTop: 15 }}>
              <Text style={styles.Text}>Name: {result.product.name}</Text>
              <Text style={styles.Text}>Price: {result.price}</Text>
              <Text style={styles.Text}>Qty: {result.quantity}</Text>
              <Text style={styles.Text}>Placed On: {res}</Text>
              <Text style={styles.Text}>Status: {result.status}</Text>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{ flex: 1, flexDirection: "row", paddingTop: 7 }}
                ></View>
              </View>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default MyOrderListItem;
const styles = StyleSheet.create({
  Text: {
    fontSize: 15
  },
  bttn: {
    fontWeight: "900",
    display: "flex",
    color: "#ffffff"
  }
});
