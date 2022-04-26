<<<<<<< HEAD
import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "./search";
import Images from "./Images";
import Pagination from "./Pagination";
import ReactPaginate from "react-paginate";
=======
import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Search } from './search';
import Images from './Images';
>>>>>>> 75e2b0d0e7fb6eaf6661685e7ae4b2465e129473

const ImageLoader = () => {
  const [image, setImage] = useState([]);
<<<<<<< HEAD
  const [searchedimage, setSearchedimage] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(5);
  // const [loading, setLoading] = useState(false);
=======
  const [searchedimage, setSearchedimage] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [imgPerPage, setImgPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
>>>>>>> 75e2b0d0e7fb6eaf6661685e7ae4b2465e129473
  useEffect(() => {
    // setLoading(true);

    axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
      console.log(res);
      setImage(res.data.slice(0, 200));
    });
    // setLoading(false);
  }, []);

  const pagesVisited = pageNumber * imagesPerPage;
  const displayImage = image
    .slice(pagesVisited, pagesVisited + imagesPerPage)
    .map((image: any) => (
      // <img key={image.id} src={image.url} height={150} width={150}></img>
      // <span key={image.id} className="gallery">
      <span className="image-style">
        <img key={image.id} src={image.url} height={150} width={150}></img>
      </span>
      // </span>
    ));
  const handleClick = () => {
    const filteredimage = image.filter((i: any) => {
      return i.title.includes(searchedimage);
    });
    setImage(filteredimage);
  };
  const pageCount = Math.ceil(image.length / imagesPerPage);
  const changePage = (selected: any) => {
    setPageNumber(selected);
  };
  // const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  return (
    <div>
      <div className="main">
        <h1 className="main-heading">Photo Gallery</h1>
        <div className=" rounded header-style">
          <input
            className="header-input"
            type="search"
            value={searchedimage}
            onChange={(e) => {
              setSearchedimage(e.target.value);
            }}
            placeholder="Search"
          />
          <button type="button" className="header-button" onClick={handleClick}>
            Search
          </button>
        </div>
<<<<<<< HEAD
        {displayImage}
=======

        <Images image={image} loading={loading} />
>>>>>>> 75e2b0d0e7fb6eaf6661685e7ae4b2465e129473
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default ImageLoader;
