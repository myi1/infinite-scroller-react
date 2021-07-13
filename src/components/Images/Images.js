import React from "react";

export default function Images({ images }) {
  return (
    <div className='image-container' id='image-container'>
      {images.map((image) => (
        <img
          key={image.id}
          className='image-container__image'
          src={image.urls.regular}
          alt={image.alt_description}
          title={image.alt_description}
        />
      ))}
    </div>
  );
}
