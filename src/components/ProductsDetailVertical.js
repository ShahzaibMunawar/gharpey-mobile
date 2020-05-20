import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import constants from "../constants/index";
import StarRating from 'react-native-star-rating';
class ProductsDetailVertical extends Component {

  render() {
    var img = this.props.image;
    img = img.replace('public','storage');
// console.log("img");
// console.log(this.props.image);
    return (
      <View style={{ width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd' }}>
      <View style={{ flex: 1 }}>
        <Image
          style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
          source={{uri: "https://sydiatech.com/"+img}} />
      </View>
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{this.props.name}</Text>
        <Text style={{ fontSize: 10 }}>RS:{this.props.price}</Text>
        <Text style={{ fontSize: 10, color: '#b63838' }}> Shop: {this.props.seller}</Text>
        <StarRating
          disable={true}
          maxStars={5}
          rating={4}
          starSize={10}
        />
      </View>
    </View>

    );
  }
}
export default ProductsDetailVertical;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
