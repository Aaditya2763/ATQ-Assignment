// PostBox.js
import React, { Fragment } from 'react';
import CardBox from '../components/card/Card';
import { Container } from 'react-bootstrap';

import  "./post.css"
import { PiTelegramLogo } from "react-icons/pi";
const PostBox = () => {
  // Use the useParams hook to get the id from the route


  return (
    <Fragment>
      <Container className="d-flex flex-row justify-content-between mt-3 mb-3 position-relative">
        <CardBox />
        <div className="border rounded" style={{ width: '30%', height: 'auto', border: '1px solid red' }}>
            <p className="heading" style={{fontSize:20}}> All Comments</p>
           <div className='d-flex flex-column border overflow-auto' style={{width:"100%",height:300}}>
            <div className='  p-1' style={{width:"100%",height:'auto'}}>
            <p className='author'>Author:</p>
            <p className='comment'>sjbjsjfdajndjakbgadnfkgnvkfnbkgfnkbnfgnbkfgnbsknbngkjbfnsnbsngnf</p>
            </div>
            <div className='  p-1'>
            <p className='author'>Author:</p>
            <p  className='comment'>sjbjsjfdajndjakbgadnfkgnvkfnbkgfnkbnfgnbkfgnbsknbngkjbfnsnbsngnf</p>
            </div>
            <div className='  p-1'>
            <p className='author'>Author:</p>
            <p  className='comment'>sjbjsjfdajndjakbgadnfkgnvkfnbkgfnkbnfgnbkfgnbsknbngkjbfnsnbsngnf</p>
            </div>
            <div className='  p-1'>
            <p className='author'>Author:</p>
            <p  className='comment'>sjbjsjfdajndjakbgadnfkgnvkfnbkgfnkbnfgnbkfgnbsknbngkjbfnsnbsngnf</p>
            </div>
           </div>
           <form  className='d-flex flex-row m-1 mt-3'>
            <input placeholder='write comment' className='form-control'/>
            <button type='button' className='btn btn-primary'><PiTelegramLogo/></button>
           </form>
        
        </div>
      </Container>
    </Fragment>
  );
};

export default PostBox;
