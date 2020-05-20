import React, { Component }  from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import CartIcon from "../components/CartIcon";

class OrderScreen extends Component {

  render() {

    return (

      <Container style={{height: 135}}>
        {/*<Header style={{marginTop: 24,backgroundColor: '#922c88'}}>*/}
        {/*  <Body>*/}
        {/*    <Text>My orders</Text>*/}
        {/*  </Body>*/}
        {/*  <Right>*/}
        {/*    <CartIcon />*/}
        {/*  </Right>*/}
        {/*</Header>*/}
        <Content>
          <Card>
            <CardItem style={{display: 'flex'}}>
              <Text>You haven't order anything yet!!!</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  };
}


export default OrderScreen;
