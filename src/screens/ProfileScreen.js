import React, { Component }  from "react";
import { Text, View, Image, StyleSheet , TouchableOpacity} from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right , List, ListItem} from 'native-base';
import CartIcon from "../components/CartIcon";
class ProfileScreen extends Component {

  render() {

    return (

      <Container style={{height: 135}}>

        {/*<Header style={{marginTop: 24,backgroundColor: '#922c88'}}>*/}
        {/*  <Body>*/}
        {/*    <Image source={require('../../assets/logo.png')} style={{width:50,height:30}}/>*/}
        {/*  </Body>*/}
        {/*  <Right>*/}
        {/*    <CartIcon />*/}
        {/*  </Right>*/}
        {/*</Header>*/}
        <Content>
          <Card>
            <CardItem style={{display: 'flex'}}>
              <Image
                style={{  height: 150, width: 150, borderRadius:1000,resizeMode: 'contain',flex:1,justifyContent:'center' }}
                source={require('../../assets/Me.jpg')} />

            </CardItem>
            <List style={{paddingRight:100}}>
              <ListItem>
                <Left>
                  <Text style={{fontSize:16}}>Name:</Text>
                </Left>
                <Body>
                  <Text>Shahzaib Munawar</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={{fontSize:16}}>Phone :</Text>
                </Left>
                <Body>
                  <Text>+92 348 4022311</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={{fontSize:16}}>Email :</Text>
                </Left>
                <Body>
                  <Text>m.shahzaib108@gmail.com</Text>
                </Body>
              </ListItem>

            </List>
          </Card>
        </Content>
      </Container>
    );
  };
}


export default ProfileScreen;
