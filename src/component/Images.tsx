import React from "react";
import { ImageProps } from "./ImageProps";
interface Props {
  image: ImageProps[];
  // loading: boolean;
  pagesVisited: number;
  imagesPerPage: number;
}

const Images = ({ image, pagesVisited, imagesPerPage }: any) => {
  console.log(image, pagesVisited, pagesVisited + imagesPerPage);

  return (
    <div>
      <div className="gallery">
        {image
          .slice(pagesVisited, pagesVisited + imagesPerPage)
          .map((image: any) => (
            <div className="image-style" key={image.id}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={image.url} height={300} width={300}></img>
                  </div>
                  <div className="flip-card-back">
                    <img src={image.thumbnailUrl} alt="thumbNail" />
                    <h3>{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Images;
