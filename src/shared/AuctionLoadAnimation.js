import React from 'react'
import './AuctionLoadAnimation.css';

function AuctionLoadAnimation() {
  return (
<div className='container'>
  <div className='loader'>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--text'></div>
  </div>
</div>
  )
}

export default AuctionLoadAnimation