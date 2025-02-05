import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); // To store the fetched data
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url); // Fetch data from the provided URL
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json(); // Parse response as JSON
        setData(result); // Set the fetched data
      } catch (error) {
        setError(error.message); // Set any error that occurred
      } finally {
        setLoading(false); // Set loading to false once fetch is complete
      }
    };

    fetchData();
  }, [url]); // Only re-run the effect if the URL changes

  return { data, loading, error }; // Return data, loading, and error states
};

export default useFetch;