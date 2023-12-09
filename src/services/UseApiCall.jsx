import React, { useEffect, useState } from "react";
import { apiCallNew } from "./apiCallNew";

const UseApiCall = (endpoint, callMethod, data, render) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiCallNew(endpoint, callMethod, data);
        setResponse(result.data); // Assuming your API response is in a "data" field
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [render]);

  return { response, error };
};

export default UseApiCall;
