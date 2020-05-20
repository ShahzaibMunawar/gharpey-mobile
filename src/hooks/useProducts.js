import React, { useState, useEffect } from "react";
import yelp from "../api/yelpProducts";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, seterrorMsg] = useState([]);

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/products");
      setResults(response.data);
    } catch (err) {
      seterrorMsg("Something went Wrong");
    }
  };
  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, errorMsg, results];
};
