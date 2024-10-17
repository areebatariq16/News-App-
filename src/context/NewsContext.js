import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [search, setSearch] = useState("pakistan");
  const [newsData, setNewsData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const API_KEY = "386b52f330cf4adab55c3cddfd474045";

  const getData = async (searchTerm) => {
    if (!searchTerm.trim()) {
      console.log("Search query is empty");
      return;
    }
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <NewsContext.Provider
      value={{
        search,
        setSearch,
        newsData,
        showForm,
        setShowForm,
        getData,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
