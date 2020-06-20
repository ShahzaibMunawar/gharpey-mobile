import React, { useState, useEffect } from "react";
import yelp from "../api/yelpProducts";

import { useNavigation } from "@react-navigation/native";

export default () => {
  const [results, setResults] = useState([]);
  const [SearchResponse, setSearchResponse] = useState([]);
  const [errorMsg, seterrorMsg] = useState([]);
  // const navigation = useNavigation();

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/products");
      setResults(response.data);
    } catch (err) {
      seterrorMsg("Something went Wrong");
    }
  };
  // const SearchResults = async searchTerm => {
  //   try {
  //     // console.log(yelp.get("/search?q=" + searchTerm));
  //     const response = await yelp.get("/search?q=" + searchTerm);
  //     setSearchResponse(response);
  //     console.log("Before AllProducts");
  //     navigation.navigate("AllProducts", { response, searchTerm });

  //     console.log("After AllProducts");
  //   } catch (err) {
  //     seterrorMsg("Something went Wrong");
  //   }
  //   console.log("try catch end =======");
  // };
  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, errorMsg, results];
};
