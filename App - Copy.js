import React from "react";
import {
  View,
  UIManager,
  LayoutAnimation,
  StyleSheet,
  AsyncStorage
} from "react-native";
import AppAuth from "react-native-app-auth";
import { AppLoading } from "expo";
import firebase from "firebase";
import LoginForm from "./src/components/LoginForm";
import Signup from "./src/components/Signup";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Container, Header, Content, Button, Text } from "native-base";
import { Spinner } from "./src/commen";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import immutableTransform from "redux-persist-transform-immutable";
import store from "./App/Store";
import Root from "./App/Root";

export default class App extends React.Component {
  componentDidMount() {
    persistStore(store, {
      storage: AsyncStorage,
      transforms: [immutableTransform()],
      whitelist: ["auth"]
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      loggedIn: false,
      hasLoggedInOnce: false,
      accessToken: "",
      accessTokenExpirationDate: "",
      refreshToken: "",
      loading: true
    };
  }
  // async componentWillMount() {
  //   await Expo.Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf")
  //   });
  //   this.setState({ loading: false });
  // }
  render() {
    // if (this.state.loading) {
    //   return <Expo.AppLoading />;
    // }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
