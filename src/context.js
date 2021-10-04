import React, { useState, useContext, useEffect } from "react";
  import { useCallback } from "react";

const url = "https://www.breakingbadapi.com/api/characters?name=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState([]);
  const [redirect, setRedirect] = useState(false)

  const fetchCharacters = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data)
      
      if (data) {
        const searchedCharacters = data.map((item) => {
          const { char_id, name, birthday, img, nickname, appearance, portrayed } =
            item;
          return {
            id: char_id,
            name: name,
            birthday: birthday,
            image: img,
            nickname: nickname,
            appearance: appearance,
            portrayed: portrayed
          };
        });
        setCharacters(searchedCharacters);
        
      } else {
        setCharacters([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchCharacters();
  }, [searchTerm, fetchCharacters]);

  return (
    <AppContext.Provider value={{ loading, setSearchTerm, characters, redirect, setRedirect }}>
      {children}
    </AppContext.Provider>
  );
};


export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
