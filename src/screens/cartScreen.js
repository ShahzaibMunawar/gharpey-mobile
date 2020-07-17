import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, WebView } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import CartItem from "../components/SingleCartItem";

class cartScreen extends Component {
  render() {
    const result = this.props.cartItems;
    const total = this.props.total;

    return (
      <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="calculator" />
                    <Text>RS: {total}</Text>
                  </Button>
                </Left>
                <Body>
                  <Button
                    onPress={this.onCheckoutButtonPress.bind(this)}
                    block
                    style={{ backgroundColor: "#61005b" }}
                  >
                    <Icon type="Ionicons" name="checkmark" />
                    <Text>Checkout</Text>
                  </Button>
                </Body>
              </CardItem>
            </CardItem>
          </Card>
          <FlatList
            data={result}
            showsVerticalScrollIndicator={false}
            keyExtractor={result => result.id.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity>
                  {result.length > 0 ? (
                    <CartItem result={item} />
                  ) : (
                    <Text>No items in your cart</Text>
                  )}
                </TouchableOpacity>
              );
            }}
          />
          <Text></Text>
        </Content>
      </Container>
    );
  }
  onCheckoutButtonPress() {
    var checkoutItems = "";
    var checkoutQuantity = "";

    this.props.cartItems.map(item => {
      checkoutQuantity = checkoutQuantity + item.quantity + ",";
      checkoutItems = checkoutItems + item.id + ",";
    });
    checkoutQuantity = checkoutQuantity.substring(
      0,
      checkoutQuantity.length - 1
    );
    checkoutItems = checkoutItems.substring(0, checkoutItems.length - 1);
    checkoutItems = checkoutItems + "&";
    var URL =
      "https://sydiatech.com/cart/?item=" +
      checkoutItems +
      "quantity=" +
      checkoutQuantity;
    console.log(URL);
    checkoutItems = "";
    checkoutQuantity = "";

    this.props.navigation.navigate("Browser", { url: URL });
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart,
    total: state.total
  };
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
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
  }
});

export default connect(mapStateToProps)(cartScreen);
