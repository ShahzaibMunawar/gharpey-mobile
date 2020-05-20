import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, seterrorMsg] = useState([]);

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
      console.log(response.data.businesses);
    } catch (err) {
      seterrorMsg("Something went Wrong");
    }
    // console.log(setResults);
  };
  // useEffect(() => {
  //   searchApi("pasta");
  // }, []);

  return [searchApi, errorMsg, results];
};
