import React, { Component }  from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import {connect} from "react-redux";
import CartIcon from "./CartIcon";

class cartItem extends Component {

  render() {
    const result = this.props.result;
    console.log("res====");
    console.log(result);
    var img = "http://sydiatech.com/"+result.featured_image.replace('public','storage');
    return (

      <Container style={{height: 135}}>

        <Content>
          <Card>
            <CardItem style={{display: 'flex'}}>
              <Thumbnail source={{uri: img}} style={{height: 100,width: 100}} />
              <Body style={{marginLeft:15,marginTop: 15}}>
                  <Text style={styles.Text}>Name: {result.name}</Text>
                  <Text style={styles.Text}>Price: {result.price}</Text>
              </Body>
              <Button danger style={styles.bttn}  onPress={this.props.removeItem}><Text> X </Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
};
}
{/*<View style={styles.container}>*/}
{/*  <Image style={styles.image} source={{ uri: 'http://sydiatech.com/'+img }} />*/}
{/*  <Text style={styles.name}>{result.name} </Text>*/}
{/*  <Text style={styles.review}>*/}
{/*    Price: {result.price}*/}
{/*  </Text>*/}
{/*</View>*/}
const mapStateToProps = (state) => {
  return {
    cartItems: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(cartItem);
const styles = StyleSheet.create({
Text:{
  fontSize:15
},
  bttn:{
    width:50,
    height:50,
    borderRadius:50,
    fontWeight: "900",
    textAlign: 'center',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    color: '#ffffff',

  }

});
