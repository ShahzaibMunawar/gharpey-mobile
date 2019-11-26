import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Input, Spinner } from "../commen";
import { UIManager, LayoutAnimation } from "react-native";
import AppAuth from "react-native-app-auth";
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
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const scopes = ["openid", "profile", "email", "offline_access"];

type State = {
  hasLoggedInOnce: boolean,
  accessToken: ?string,
  accessTokenExpirationDate: ?string,
  refreshToken: ?string
};
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fullname: "",
      confirm_password: "",
      phone: "",
      error: null,
      loading: false
    };
  }
  auth = new AppAuth({
    issuer: "https://{yourOktaDomain}.com/oauth2/default",
    clientId: "{clientId}",
    redirectUrl: "com.{yourReversedOktaDomain}:/callback"
  });

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Signup</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form>
            <Card>
              <CardItem>
                <Content>
                  <Item floatingLabel style={styles.mb_10}>
                    <Label>Username</Label>
                    <Input
                      value={this.state.fullname}
                      onChangeText={fullname => this.setState({ fullname })}
                    />
                  </Item>
                  <Item floatingLabel style={styles.mb_10}>
                    <Label>Email</Label>
                    <Input
                      value={this.state.email}
                      onChangeText={email => this.setState({ email })}
                    />
                  </Item>
                  <Item floatingLabel style={styles.mb_10}>
                    <Label>Phone</Label>
                    <Input
                      value={this.state.phone}
                      onChangeText={phone => this.setState({ phone })}
                    />
                  </Item>
                  <Item floatingLabel style={styles.mb_10}>
                    <Label>Password</Label>
                    <Input
                      value={this.state.password}
                      onChangeText={password => this.setState({ password })}
                    />
                  </Item>

                  <Item floatingLabel style={styles.mb_10}>
                    <Label>Confirm Password</Label>
                    <Input
                      value={this.state.confirm_password}
                      onChangeText={confirm_password =>
                        this.setState({ confirm_password })
                      }
                    />
                  </Item>
                  <Button full success style={styles.mt_10}>
                    <Text>Success</Text>
                  </Button>
                </Content>
              </CardItem>
            </Card>
          </Form>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // You should only need this
    height: "100%", // But these wouldn't hurt.
    width: "100%",
    justifyContent: "center",
    alignContent: "center"
  },
  mb_10: {
    marginBottom: 10
  },
  errorStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  },
  Input: {
    marginBottom: 10
  },
  signupBtn: {
    textAlign: "center",
    alignContent: "center"
  },
  mt_10: {
    marginTop: 10
  }
});
