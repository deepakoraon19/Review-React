import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0)
  const {name,job,image,text} = people[index]
  const nextPerson = ()=>{
    if(index==people.length-1){
      setIndex(0)
    }else setIndex(index+1)
  }
  const prevPerson = ()=>{
    if(index==0){
      setIndex(4)
    }else setIndex(index-1)
  }
  const randomPerson = ()=>{
    let old = index
    let curr = Math.floor(Math.random()*4)
    while(old===curr){
      curr = Math.floor(Math.random()*4)
    }

    setIndex(curr)
  }
  return <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img'></img>
      <span className='quote-icon'><FaQuoteRight /></span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className="button-container">
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft />
      </button>      
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight />
      </button>
      <button className='random-btn' onClick={randomPerson}>
        Suprise me
      </button>
    </div>
  </article>;
};

export default Review;
