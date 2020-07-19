import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter, useHistory } from 'react-router-dom';

import { addNewPost } from '../redux/actions/actions';
import { isUriImage } from '../services/lib'

import './CreatePage.css';

const CreatePage = () => {
  const [imagePath, setImagePath] = useState('');
  const [instruction, setInstruction] = useState('');
  const [err, setErr] = useState('');
 
  const history = useHistory();

  const dispatch = useDispatch();
    
  const handleImagePathChange = (event) => {
    setErr('');
    setImagePath(event.target.value);
  }
  
  const handleInstructionChange = (event) => { setInstruction(event.target.value); }
  
  const handleCreateNewPost = (e) => {
    e.preventDefault();
        
    if (!isUriImage(imagePath)) {
      setErr('please input a valid image address');
      return;
    }
    dispatch(addNewPost(instruction, imagePath));
    history.push('/');
  }
  
  return (
    <div className="new-post">
      
      <Link to="/" style={{ textDecoration: 'none' }}>
        <p className="go-back">Go Back to Home Page</p>
      </Link>
      
      <h2>Create New Post</h2>
      
      <form onSubmit={handleCreateNewPost}>
        <label htmlFor="image">Image</label>
        <input type="text" id="image" name="image" placeholder="put your image link e.g. https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg" 
          onChange={handleImagePathChange} />
        {err && <p>{err}</p>}

        <label htmlFor="instruction">Coupon Value</label>
        <textarea id="instruction" name="instruction" placeholder="please input your coupon value and instruction.." onChange={handleInstructionChange} />
        
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  )
}

export default withRouter(CreatePage);