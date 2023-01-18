import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import featuredImages from './images';

let count = 0;
let slideInterval;
const Cards = () => {

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

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
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

  const [currentIndex, setCurrentIndex] = useState(0);
return (
  <div>
    <div className=" mx-auto">
      <div className="w-full  relative select-none" ref={slideRef}>
        <div className="aspect-w-16 aspect-h-9  ">
          <img src={featuredImages[currentIndex]} alt=""  />
        </div>

        <div className="absolute w-full top-96 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handleOnPrevClick} className=" text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:text-blue-300 transition">
            <AiOutlineLeft size={50} />
          </button>
          <button onClick={handleOnPrevClick} className=" text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:text-blue-300 transition">
            <AiOutlineRight size={50} />
          </button>
        </div>
      </div>
    </div>
  </div>
    );
    }
export default Cards;