import React, { useEffect, useRef, useState } from "react";
import { FaWindows } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { Redirect } from "react-router";

const SearchForm = ({searchValue}) => {
  const { setSearchTerm, redirect, setRedirect } = useGlobalContext();

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCharacter = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  };

  return (
    <>
      {redirect && (
      <Redirect to="/" />)}
      <section className="">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              id="name"
              ref={searchValue}
              onChange={searchCharacter}
              placeholder="Search"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default SearchForm;
