import React, { Component, useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, WebView } from "react-native";
import yelp from "../api/yelp";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import CartItem from "../components/SingleCartItem";
import MyOrderListItem from "../components/MyOrderListItem";

class UserOrderDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "",
      loading: true
    };
  }
  async componentDidMount() {
    const response = await yelp.get("/orders");
    let result = response.data.data.orders;
    this.setState({ result: result, loading: false });
  }

  render() {
    const getResult = () => {
      //   const response = await yelp.get("/orders");
      //   let result = response.data.data.orders;
      //   this.setState({ result: result, loading: false });
    };
    // const UserOrderDetails = ({ navigation }) => {
    //   const [result, setResult] = useState(null);

    //   fetchData = async () => {
    //     await fetch("https://sydiatech.com/api/user/orders", {
    //       method: "GET",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //         Authorization:
    //           "Bearer 20|aSxzX1bRJsyzTJZFbFomsnrJOIGzDVLGH6plXKMH7uBj2PC4QqG5O0YL0IbByXsYunsvfH3RciO6vKQ4"
    //       }
    //     })
    //       .then(response => response.json())
    //       .then(json => {
    //         setResult(json.data);
    //         console.log("json Datta", json);
    //       })
    //       .catch(error => {
    //         alert("Data error");
    //         console.log("catch ERROR", error);
    //       });
    //   };
    //   fetchData();

    //   console.log("1");
    // const [result, setResult] = useState(null);

    // const getResult = async () => {
    //   const response = yelp.get("/orders").then(data => {
    //     setResult(data.data.orders);
    //     console.log(data.data);
    //   });
    //   // setResult(response.data.data.orders);
    //   // console.log(response.data.data.orders);
    // };
    // useEffect(() => {
    //   getResult();
    //   console.log("result");
    //   console.log(result);
    // }, []);

    // if (!this.state.result) {
    //   return null;
    // }

    console.log("resultzzzz");
    if (!this.state.loading) {
      console.log(this.state.result[0].items);
    }
    return (
      <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem>
              <CardItem>
                <Left></Left>
                <Body>
                  <Button
                    onPress={this.getResult}
                    block
                    style={{ backgroundColor: "#61005b" }}
                  >
                    <Icon type="Ionicons" name="infinite" />
                    <Text>Refresh</Text>
                  </Button>
                </Body>
              </CardItem>
            </CardItem>
          </Card>
          {!this.state.loading &&
            this.state.result.map((item, index) => {
              return (
                <FlatList
                  key={index}
                  data={item.items}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={result => item.id.toString()}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity>
                        {this.state.result.length > 0 ? (
                          <MyOrderListItem result={item} />
                        ) : (
                          <Text>No items in your cart</Text>
                        )}
                      </TouchableOpacity>
                    );
                  }}
                />
              );
            })}
          <Text></Text>
        </Content>
      </Container>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     cartItems: state.cart,
//     total: state.total
//   };
// };
const styles = StyleSheet.create({
  container: {
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

export default UserOrderDetails;
