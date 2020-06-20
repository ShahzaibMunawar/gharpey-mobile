import React, { useState, useEffect } from "react";
import yelp from "../api/yelpProducts";
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

const searchScreen = ({ navigation }) => {
  console.disableYellowBox = true;
  const [term, setTerm] = useState("");
  const [SearchResponse, setSearchResponse] = useState([]);

  const [searchApi, errorMsg, results] = useProducts();
  const SearchQuery = async searchTerm => {
    try {
      const response = await yelp.get("/search?q=" + searchTerm);
      var results = response.data;
      var title = searchTerm;
      setSearchResponse(results);
      console.log(results);
      console.log("SearchResponse just after setting value is");
      console.log(SearchResponse);
      console.log("Before AllProducts");
      var run = () => {
        navigation.navigate("AllProducts", { results, title });
      };
      run();
      console.log("After AllProducts");
    } catch (err) {
      seterrorMsg("Something went Wrong");
    }
    console.log("try catch end =======");
  };
  return (
    <Container>
      <Header style={{ backgroundColor: "#922c88" }}>
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
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => SearchQuery(term)}
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
