import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Right, Thumbnail } from "native-base";
import {connect} from 'react-redux';

import { withNavigation } from 'react-navigation'
const logo = (props) => (
  <View style={{marginRight: 10}}>

    <Icon onPress={() => props.navigation.navigate('cartScreen')} style={{color:'#ffffff'}}   name="ios-cart" size={30} />
  </View>
)


export default logo;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainer: {
    paddingLeft: 20, paddingTop: 10, marginRight: 5
  }
});
