import React from 'react';
import { ImageProps } from './ImageProps';
interface Props {
  image: ImageProps[];
  pagesVisited: number;
  imagesPerPage: number;
}

const Images = (props: Props) => {
  console.log(props.image);

  return (
    <div className="gallery">
      {props.image.map((img: ImageProps, id: number) => (
        <div className="image-style" key={id}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={img.url} height={300} width={300}></img>
              </div>
              <div className="flip-card-back">
                <img src={img.thumbnailUrl} alt="thumbNail" />
                <h3>{img.title}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;
