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
import NumericInput from "react-native-numeric-input";
import { connect } from "react-redux";
const singleCartItem = ({ navigation, dispatch, result }) => {
  const [value, setvalue] = useState();
  // const [result, setResult] = useState(null);
  // const result = this.props.result;
  console.log("res====" + result);

  if (value) {
    var quantity = value.value;
    // result.quantity = quantity;

    console.log(quantity * result.price);
  }

  var img =
    "http://sydiatech.com/" +
    result.featured_image.replace("public", "storage");
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
              <Text style={styles.Text}>Name: {result.name}</Text>
              <Text style={styles.Text}>Price: {result.price}</Text>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Button
                  transparent
                  style={styles.bttn}
                  onPress={() => {
                    // console.log("jere " + result.id);
                    dispatch({
                      type: REMOVE_FROM_CART,
                      payload: result
                    });
                  }}
                >
                  <Icon
                    name="delete"
                    style={{ fontSize: 20, color: "#a50016" }}
                    type="MaterialIcons"
                  />
                  <Text> Remove</Text>
                </Button>
                <View style={{ flex: 1, flexDirection: "row", paddingTop: 7 }}>
                  <NumericInput
                    value={value ? value.value : 1}
                    totalHeight={30}
                    maxValue={20}
                    rightButtonBackgroundColor={"white"}
                    leftButtonBackgroundColor={"white"}
                    minValue={1}
                    initValue={1}
                    onChange={value => {
                      setvalue({ value });
                      result.quantity = value;
                      console.log(result);
                      console.log(result.price * result.quantity);
                      dispatch({
                        type: "AGJUST_PRICE",
                        payload: result
                      });
                    }}
                  />
                </View>
              </View>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: product => {
      dispatch({ type: REMOVE_FROM_CART, payload: product });
    }
  };
};

export default connect(mapStateToProps, null)(singleCartItem);
const styles = StyleSheet.create({
  Text: {
    fontSize: 15
  },
  bttn: {
    fontWeight: "900",
    // textAlign: "center",
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    color: "#ffffff"
  }
});
