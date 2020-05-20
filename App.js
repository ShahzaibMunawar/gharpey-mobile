import React, { useState } from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import { Text} from "native-base";
// import LoginForm from "./src/components/LoginForm";
import Router from "./Router";
import {Provider} from 'react-redux';
import store from './store/index';
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import ProductsShowScreen from "./src/screens/ProductsShowScreen";
import searchScreen from "./src/screens/searchScreen";
import CartIcon from "./src/components/CartIcon";
import cartScreen from "./src/screens/cartScreen";
import AllProducts from "./src/screens/AllProducts";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={searchScreen} />
      <Tab.Screen name="cart" component={cartScreen} />
    </Tab.Navigator>
  );
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isLoggedIn: false
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {

    if (this.state.loading) {
      return (
        <View>
          <Text>Please Wait while loading</Text>
        </View>
      );
    } else {
      return (
        <Provider store={store}>
           <Router />
        </Provider>
      );
    }
  }
}

