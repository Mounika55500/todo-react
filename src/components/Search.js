import "./search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm("");
    navigate(`/search?term=${term}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-container">
        <input
          onChange={handleChange}
          className="search-input"
          value={term}
          type="search"
          placeholder="Search..."
        />
      </form>
    </>
  );
}
export default Search;
