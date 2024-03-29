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
    console.log("mouse")
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
      <div className="w-full h-1/2 relative select-none " ref={slideRef}>
        <div className=" mx-auto object-fill " ref={slideRef}>
        <div className="relative cursor-pointer ">
            <img src={featuredImages[currentIndex].content} alt={featuredImages[currentIndex].alt} className=" w-full rounded-r-xl rounded-tr-xl drop-shadow-xl  rounded-b-xl object-cover" preload="true" as="image" />
            <div className="absolute lg:bottom-[40%] bottom-[30%] left-[14%]">
            <h2 className="text-white lg:text-6xl text-sm md:text-xl  font-bold  ">{featuredImages[currentIndex].Title}</h2>
            <h3 className="text-white  lg:text-6xl text-sm md:text-xl ">{featuredImages[currentIndex].Subtitle}</h3>
            </div>
          </div>
          <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start lg:px-3">
          <button onClick={handleOnPrevClick} aria-label="avant image" className=" text-white p-1 rounded-full bg-opacity-50 opacity-25 hover:opacity-100 cursor-pointer hover:hover:text-white transition">
            <AiOutlineLeft size={40} />
          </button>
          <button onClick={handleOnPrevClick} aria-label="prochaine image" className=" text-white p-1 rounded-full opacity-25 bg-opacity-50 cursor-pointer hover:opacity-100 transition">
            <AiOutlineRight size={40} />
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>
    );
    }
export default Cards;