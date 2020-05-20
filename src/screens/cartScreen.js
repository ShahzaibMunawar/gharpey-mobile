import React, { Component} from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import CartItem from "../components/cartItem";

class cartScreen extends Component {

render() {
const result = this.props.cartItems;

    return (

      <View style={styles.container}>
        <FlatList
          data={result}
          showsVerticalScrollIndicator={false}
          keyExtractor={result => result.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                {result.length > 0 ?
                <CartItem result={item}/>
                  : <Text>No items in your cart</Text>
                }
              </TouchableOpacity>
            );
          }}
        />
      </View>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state
  }
}
const styles = StyleSheet.create({
  container:{
    marginTop: 10
  },
  image: {
    width: 500,
    height: 300
  },
  List: {
    marginTop: 10,
    marginLeft: 80
  },
  text: {
    alignContent: "center",
    fontWeight: "bold"
  }
});

export default connect(mapStateToProps)(cartScreen);
