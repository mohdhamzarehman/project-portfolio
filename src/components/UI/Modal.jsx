import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((item) => item.id === activeID);
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div
        className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform 
        -translate-x-1/2 -translate-y-1/2 p-5"
      >
        <div>
          <figure>
            <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
          </figure>
        </div>

        <div>
            <h2 className="text-2xl text-headingColor font-[700] my-5">{portfolio.title}</h2>

            <p className="text-smallTextColor font-[500] text-[16px]">{portfolio.description}</p>
        </div>

        <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] text-[700]">Technologies:</h4>

            {
                portfolio.technologies?.map((item, index) => (
                    <span key={index} className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0">{item}</span>
                ))
            }
        </div>

        <a href={portfolio.siteUrl}>
            <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px]
            font-[500] hover:bg-headingColor ease-in duration-300">Live Site</button>
        </a>
      </div>
    </div>
  );
};

export default Modal;
