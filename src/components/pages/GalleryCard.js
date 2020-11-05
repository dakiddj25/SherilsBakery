import React from 'react';
import '../../App.css';

const GalleryCard = ({photo}) =>{
  const {img, alt} = photo
  return (
    <div>
    <img src={img} alt={alt}/>
    </div>
  );
}

export default GalleryCard;