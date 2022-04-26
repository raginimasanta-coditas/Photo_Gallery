import React from "react";
import { ImageProps } from "./ImageProps";
interface Props {
  image: ImageProps[];
  loading: boolean;
}

const Images = (props: any) => {
  console.log(props.image);
  console.log(props.loading);

  if (props.loading) {
    return <h2>loading....</h2>;
  }
  return (
    <div className="gallery">
      {props.image.map((img: ImageProps) => (
        <div className="image-style" key={img.id}>
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