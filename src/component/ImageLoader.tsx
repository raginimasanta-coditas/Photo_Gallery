import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./search";
import Images from "./Images";
import ReactPaginate from "react-paginate";

let defaultimage: React.SetStateAction<any[]>;
const ImageLoader = () => {
  const [image, setImage] = useState([]);
  const [searchedimage, setSearchedimage] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(16);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      console.log(res);
      defaultimage = res.data.slice(0, 200);
      setImage(defaultimage);
    });
  }, [searchedimage]);

  const pagesVisited = pageNumber * imagesPerPage;

  const pageCount = Math.ceil(image.length / imagesPerPage);
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  const setNewimage = (filteredimage: any) => {
    console.log(filteredimage);

    setImage(filteredimage);
  };
  const handleClear = () => {
    setImage(defaultimage);
  };
  return (
    <div>
      <div className="main">
        <h1 className="main-heading">Photo Gallery</h1>

        <Search
          image={image}
          setImage={setNewimage}
          handleClear={handleClear}
        />

        <Images
          pagesVisited={pagesVisited}
          imagesPerPage={imagesPerPage}
          image={image}
        />
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
