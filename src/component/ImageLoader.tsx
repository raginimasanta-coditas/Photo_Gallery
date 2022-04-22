import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Search } from './search';

const ImageLoader: React.FC = () => {
  const [image, setImage] = useState([]);
  const [searchedimage, setSearchedimage] = useState('');
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
      console.log(res);
      setImage(res.data);
    });
  }, []);

  return (
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
        <button
          type="button"
          className="header-button"
          onClick={() => {
            Search(searchedimage);
          }}
        >
          Search
        </button>
      </div>
      <div className="gallery">
        {image.map((i) => (
          <div className="image-style">
            <img key={i.id} src={i.url} height={150} width={150}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageLoader;
