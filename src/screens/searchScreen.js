import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import useProducts from "../hooks/useProducts";
import ProductsList from "../components/productsList";
import { ScrollView } from "react-native-gesture-handler";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Thumbnail
} from "native-base";
import CartIcon from "../components/CartIcon";
import { withNavigation } from "react-navigation";
import SearchBar from "../components/SearchBar";
import Swiper from "react-native-swiper";

const searchScreen = () => {
  const [term, setTerm] = useState("");
  // const [searchApi, errorMsg, results] = useResults();
  const [searchApi, errorMsg, results] = useProducts();
  // console.log("Products Results == "+results[0]);
  //   console.log("Response data ==");
  //   console.log(Object.keys(results).length);

  results.forEach(function(item, i) {
    // console.log(item);
  });

  // var itemCount = Object.keys(results).length;
  // console.log("itemCount == " + itemCount)
  // const filterResultByPrice = price => {
  //   return results.filter(result => {
  //     return result.price === price;
  //
  //   });
  // };

  return (
    <Container>
      <Header style={{ marginTop: 24, backgroundColor: "#922c88" }}>
        <Body>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 50, height: 30 }}
          />
        </Body>
        <Right>
          <CartIcon />
        </Right>
      </Header>
      <>
        <View style={{ backgroundColor: "#6b2063" }}>
          <SearchBar
          // term={term}
          // onTermChange={setTerm}
          // onTermSubmit={() => searchApi(term)}
          />
        </View>

        <ScrollView>
          <View style={{ height: 200, marginTop: -50, marginBottom: -50 }}>
            <Swiper
              autoplay={true}
              style={{ height: 200 }}
              showsPagination={false}
            >
              <View style={{ flex: 1 }}>
                <Image
                  style={{
                    flex: 1,
                    height: 200,
                    width: "100%",
                    resizeMode: "contain"
                  }}
                  source={require("../../assets/swiper_2.jpg")}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Image
                  style={{
                    flex: 1,
                    height: 200,
                    width: "100%",
                    resizeMode: "contain"
                  }}
                  source={require("../../assets/swiper_3.jpg")}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Image
                  style={{
                    flex: 1,
                    height: 150,
                    width: "100%",
                    resizeMode: "contain"
                  }}
                  source={require("../../assets/swiper_2.jpg")}
                />
              </View>
            </Swiper>
          </View>
          {results.map((item, key) => (
            <TouchableOpacity key={key}>
              <ProductsList title={item.name} results={item.products} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </>
    </Container>
  );
};

export default withNavigation(searchScreen);
