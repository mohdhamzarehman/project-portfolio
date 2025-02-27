import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

    const showModalHandler = (id) => {
        setShowModal(true);
        setActiveID(id);
    };

    useEffect(() => {
        if (selectTab === "all") {
            setPortfolios(data);
        } else {
            const newData = data.filter((item) => item.category === selectTab);
            setPortfolios(newData);
        }
    }, [selectTab]);
    
  return (
    <section id="Portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My recent projects
            </h3>
          </div>

          <div className="flex gap-3">
            <button onClick={() => setSelectTab("all")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2
            px-4 rounded-[8px]"
            >
              All
            </button>

            <button onClick={() => setSelectTab("Web Design")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2
            px-4 rounded-[8px]"
            >
              Web Design
            </button>

            <button onClick={() => setSelectTab("Ux")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2
            px-4 rounded-[8px]"
            >
              UX Design
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios?.slice(0, nextItems)?.map((item, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-duration="1000"
              data-aos-delay="50"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img className="rounded-[8px]" src={item.imgUrl} alt="" />
              </figure>

              <div
                className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 rounded-[8px]
                        left-0 z-[5] hidden group-hover:block"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <button onClick={() => showModalHandler(item.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor 
                  py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See Details
                  </button>

                  
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems >= portfolios.length ? null : (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor 
                      py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load More...
            </button>
          )}
        </div>
      </div>
          
        {/* Modal */}
        {showModal && (
            <Modal activeID={activeID} setShowModal={setShowModal} />
        )}
    </section>
  );
};

export default Portfolio;
