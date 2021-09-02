import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.prevent.default()
  }
  return (
    <section className="">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input type="text" id='name' ref={searchValue} onChange={searchCocktail} placeholder="Search" />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
