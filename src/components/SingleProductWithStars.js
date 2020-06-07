import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import constants from "../constants/index";
import StarRating from "react-native-star-rating";
class SingleProductWithStars extends Component {
  render() {
    var img = this.props.image;
    img = img.replace("public", "storage");
    var roundedRating = Math.floor(this.props.reviewavg);
    if (roundedRating < 1) {
      roundedRating = 1;
    }
    // console.log("img");
    // console.log(this.props.image);
    return (
      <View
        style={{
          width: this.props.width / 2 - 30,
          height: 160,
          borderWidth: 0.5,
          borderColor: "#dddddd",
          borderRadius: 5
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover",
              borderRadius: 5
            }}
            source={{ uri: "https://sydiatech.com/" + img }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            paddingLeft: 10,
            paddingTop: 10
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "bold", paddingTop: 3 }}>
            {this.props.name}
          </Text>
          <View style={{ height: 10 }}>
            <StarRating
              disable={true}
              maxStars={5}
              rating={roundedRating}
              starSize={10}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row", paddingTop: 3 }}>
            <Text style={{ fontSize: 10 }}>RS:{this.props.price} - </Text>
            <Text style={{ fontSize: 10, color: "#b63838" }}>
              Shop: {this.props.seller}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default SingleProductWithStars;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
