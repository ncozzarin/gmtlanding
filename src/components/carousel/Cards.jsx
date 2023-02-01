import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import featuredImages from './images';

let count = 0;
let slideInterval;
const Cards = () => {

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const slideRef = useRef();
  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);
    return () => {
      clearInterval(slideInterval);
   };
  }, []);



  const [currentIndex, setCurrentIndex] = useState(0);
return (
  <div>
    <div className="drop-shadow-xl  mx-auto">
      <div className="w-full h-1/2 relative select-none" ref={slideRef}>
        <div className=" mx-auto object-fill ">
          <img src={featuredImages[currentIndex]} alt="" className='w-full	' />
          <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handleOnPrevClick} className=" text-white p-1 rounded-full bg-opacity-50 opacity-25 hover:opacity-100 cursor-pointer hover:hover:text-white transition">
            <AiOutlineLeft size={50} />
          </button>
          <button onClick={handleOnPrevClick} className=" text-white p-1 rounded-full opacity-25 bg-opacity-50 cursor-pointer hover:opacity-100 transition">
            <AiOutlineRight size={50} />
          </button>
        </div>
        </div>


      </div>
    </div>
  </div>
    );
    }
export default Cards;