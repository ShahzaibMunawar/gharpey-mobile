import React, { Component } from "react";
import { StyleSheet, View, BackHandler ,Image,ImageBackground} from "react-native";
import { Input, Spinner } from "../commen";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
  Card,
  CardItem,
  Text,
  Item,
  Form,
  Label,
  Button
} from "native-base";
import {connect} from "react-redux";

const util = require('util');


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
      isLoggedIn: false,
      user: {}
    };

  }

  onButtonPress = async() =>{
    console.log(this.state.email);
    console.log(this.state.password);
    await fetch('https://sydiatech.com/api/auth/login',{
      method: 'POST',
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        device_name: "andriod"
      })
    }).then(response => response.json())
      .then(json => {
        console.log("json Datta", json);
        console.log("json Datta .data.user", json.data.user.name);
        if (json.hasOwnProperty("errors")){
          alert("login fail");
        } else{
          this.props.navigation.navigate("Home");
        }
      })
      .catch(error => {
        alert("login error");
        console.log("catch ERROR", error);
      });
  }
  static  navigationOptions: {
    tabBarVisible:false
  };
  onLoginFail() {
    this.setState({ error: "Authentication failed", loading: false });
  }
  onLoginSucess() {
    this.setState({ email: "", loading: false, password: "", error: "" });
  }


  render() {
// console.log("this.props.navigation = "+util.inspect(this.props.navigation,false,null));

    return (
      <ImageBackground source={require('../../assets/b.jpg')} style={{width: '100%', height: '100%'}}>

      <Container style={{backgroundColor:'transparent'}}>
        {/*<Header>*/}
        {/*  <Left />*/}
        {/*  <Body>*/}
        {/*    <Title>Authentiaacation</Title>*/}
        {/*  </Body>*/}
        {/*  <Right />*/}
        {/*</Header>*/}

        <Content padder>
          <Card style={{height:320,marginTop: 150}}>
            <CardItem>
              <Content>
                <Image style={{width:100,height:100,marginLeft:140}} source={require('../../assets/icon.png')}/>
                <Input
                  value={this.state.email}
                  secureTextEntry={false}
                  onChangeText={email => this.setState({ email })}
                  placeholder="user@gmail.com"
                  label="Username"
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
                <Text>{this.state.error}</Text>
                <Button
                  style={styles.mt_25}
                  full
                  success
                  bordered
                  onPress={this.onButtonPress.bind(this)}
                >
                  <Text>Login</Text>
                </Button>
              </Content>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </ImageBackground>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    cartItems: state
  }
}
export default  connect(mapStateToProps)(LoginForm);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%"
  },
  mt_25: {
    marginTop: 25
  },
  errorStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
});
