import React, { useState } from "react";

const Search = ({ image, setImage, handleClear, setSearchedimage }: any) => {
  const [searched, setSearched] = useState("");

  const handleClick = () => {
    const filteredimage = image.filter((i: any) => {
      return i.title.includes(searched);
    });
    setImage(filteredimage);
    // setSearchedimage(searched);
  };
  const handleClearclick = () => {
    setSearched("");
    console.log(searched);

    // handleClear();
  };
  return (
    <div className=" rounded header-style">
      <input
        className="header-input"
        type="text"
        value={searched}
        onChange={(e) => {
          setSearched(e.target.value);
        }}
        placeholder="Search"
      />
      <button
        type="button"
        className="header-button"
        onClick={handleClearclick}
      >
        clear
      </button>
      <button type="button" className="header-button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default Search;
