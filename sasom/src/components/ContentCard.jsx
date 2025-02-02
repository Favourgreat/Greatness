import React from "react";

const ContentCard = ({ icon, title, description, link, style }) => {
  return (
    <article
      style={style}
      className="md:w-[300px] lg:w-[350px] max-h-[331px] px-[30px] py-[32px] rounded border-[#0739A6] border"
      >
      <div>{icon}</div>
      <h2 className="text-2xl text-[#0739A6]">{title}</h2>
      <p className="text-md">{description}</p>
      {link && (
        <div className="text-[#0739A6] text-sm flex items-center gap-4 mt-5 hover:cursor-pointer w-auto">
            <a href="contact">Contact Us</a>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#0739A6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.375 6.875L17.5 10M17.5 10L14.375 13.125M17.5 10H2.5"
              stroke="#0739A6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}
    </article>
  );
};

export default ContentCard;
