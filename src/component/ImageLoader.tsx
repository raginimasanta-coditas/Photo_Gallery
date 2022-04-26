import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Search } from './search';
import Images from './Images';

const ImageLoader: React.FC = () => {
  const [image, setImage] = useState([]);
  const [searchedimage, setSearchedimage] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [imgPerPage, setImgPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
      console.log(res);
      setImage(res.data.results.slice(0, 20));
    });
    setLoading(false);
  }, []);

  const indexOfLastImage = currentPage * imgPerPage;
  const indexOfFirstImage = indexOfLastImage - imgPerPage;
  const currentImg = image.slice(indexOfFirstImage, indexOfLastImage);
  const handleClick = () => {
    const filteredimage = image.filter((i) => {
      return i.title.includes(searchedimage);
    });
    setImage(filteredimage);
  };

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

        <Images image={image} loading={loading} />
      </div>
      <nav aria-label="...">
        <ul className="pagination pagination-sm">
          <li className="page-item disabled">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ImageLoader;
