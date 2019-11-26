import React, { Component } from "react";
import { StyleSheet } from "react-native";
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

import firebase from "firebase";
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", error: null, loading: false };
  }
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSucess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSucess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }
  onLoginFail() {
    this.setState({ error: "Authentication failed", loading: false });
  }
  onLoginSucess() {
    this.setState({ email: "", loading: false, password: "", error: "" });
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button
        style={styles.mt_25}
        full
        success
        bordered
        onPress={this.onButtonPress.bind(this)}
      >
        <Text>Login</Text>
      </Button>
    );
  }
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Authentiaacation</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card>
            <CardItem>
              <Content>
                <Input
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                  placeholder="user@gmail.com"
                  label="Username"
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
                <Text>{this.state.error}</Text>
                {this.renderButton()}
              </Content>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // You should only need this
    height: "100%", // But these wouldn't hurt.
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
