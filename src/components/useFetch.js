import { useState, useEffect, useRef } from "react";
const useFetch = (url) => {
  const cache = useRef({});
  const [status, setStatus] = useState("idle"); // "idle", "fetching", "fetched", "error"
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus("fetching");
      try {
        // if cache exist then do this, else fetch data from the url
        if (cache.current[url]) {
          const data = cache.current[url];
          setData(data);
          setStatus("fetched");
          console.log("data from cache");
          return;
        } else {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          setData(data);
          setStatus("fetched");
          console.log("data from API");
        }
      } catch (error) {
        setStatus("error");
      }
    };

    fetchData();
  }, [url]);
  return { status, data };
};
export default useFetch;
