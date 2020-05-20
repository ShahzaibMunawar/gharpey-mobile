import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ResulsDetails from "./ResultsDetails";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {
  //if we dont get results dont show results
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={results => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultShow", { id: item.id })}
            >
              <ResulsDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: "bold",
    marginBottom: 5
  },
  container: {
    marginBottom: 15
  }
});

// instead of telling in parent when ever this compnent got clicked navigator
// We use withNavigation property that will export the special version of ResultList
export default withNavigation(ResultList);
