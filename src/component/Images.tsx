import React from "react";

const Images = (props: any) => {
  console.log(props.image);
  console.log(props.loading);

  if (props.loading) {
    return <h2>loading....</h2>;
  }
  return (
    <div className="gallery">
      {props.image.map((img: any) => (
        <div className="image-style">
          <img key={img.id} src={img.url} height={150} width={150}></img>
        </div>
      ))}
    </div>
    // <div>
    //   {props.image.map((img: any) => (
    //     <div>
    //       <img key={img.id} src={img.url}></img>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Images;
