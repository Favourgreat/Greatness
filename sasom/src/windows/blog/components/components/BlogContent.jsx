import React from "react";
import Image from "../assets/pexels-pavel-danilyuk-8761540.jpg";


const BlogContent = () => {
  return (
    <div className="w-[320px]">
      <div className="w-[320px] mb-4">
        <img className="rounded-lg" src={Image} alt="" /> 
      </div>
      <h2 className="mb-4">
        Are you building the next big thing? Here is how we can make
      </h2>
      <p className="text-sm text-opacity-50">2025-01-01</p>
    </div>
  );
};

export default BlogContent;
