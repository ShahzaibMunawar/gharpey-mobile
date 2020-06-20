import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Button } from "native-base";
import { FlatList } from "react-native-gesture-handler";
import ResulsDetails from "./ResultsDetails";
import { connect } from "react-redux";
import ProductsDetails from "./productsDetails";
import { withNavigation } from "react-navigation";

const ProductsList = ({ title, results, navigation }) => {
  //if we dont get results dont show results
  // console.log("title= "+ title +"=== And Result ==="+ results);
  // if (!results.length) {
  //   //   return null;
  //   // }
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 5,
          paddingRight: 20
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <Button
          transparent
          onPress={() => navigation.navigate("AllProducts", { results, title })}
        >
          <Text>See all ></Text>
        </Button>
      </View>
      <FlatList
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={results => results.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProductsShowScreen", { item })
              }
            >
              <ProductsDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    marginLeft: 10,
    fontWeight: "bold"
  },
  container: {
    marginBottom: 10
  }
});

// instead of telling in parentt when ever this compnent got clicked navigator
// We use withNavigation property that will export the special version of ResultList
export default withNavigation(ProductsList);
