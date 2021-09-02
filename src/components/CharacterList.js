import React from "react";
import Character from "./Character";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { characters, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (characters.length < 1) {
    return <h2 className="section-title no-match">No matches :/</h2>;
  }
  return (
    <section className="section">
      <div className="characters-center">
        {characters.map((item) => {
          return <Character key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
