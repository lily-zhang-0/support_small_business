import React from 'react';
import { useSelector } from 'react-redux';

import './ImageDisplay.css';

const ImageDisplay = () => {
  const selectedPost = useSelector(store => store.selectedPost);
  
  return (
    <div className='image-display'>
      <img src={selectedPost.imagePath} alt="popular" />
      <div className="detail">
        <p>{selectedPost.author}</p>
        <p><span>Coupon Code</span> : {selectedPost.couponCode}</p>
        <p><span>Instruction</span> : {selectedPost.instruction}</p>
      </div>
    </div>
  )
}

export default ImageDisplay;