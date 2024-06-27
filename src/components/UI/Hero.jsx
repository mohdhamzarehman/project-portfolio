import React from "react";
import heroImg from "../../assets/images/simi.svg";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div
          className="md:flex items-center justify-between
             sm:flex-col md:flex-row"
        >
          {/* Left content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[50px] 
              sm:leading[46px] mt-5"
            >
              I'm Nguyen Si Minh <br />
              Software Engineer
            </h1>

            <div data-aos-delay="200" className="flex items-center gap-6 mt-7">
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2
                hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-mail-line"></i>
                  Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid 
                border-smallTextColor"
              >
                See portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 
              sm:pl-8 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              <p className="text-justify mr-10">
                As a highly motivated and passionate junior student majoring in
                Computer Science at the University of Science, VNUHCM, I have
                developed a foundation in software development, with knowledge
                in Android Kotlin, Flutter and JavaScript. My academic projects
                have provided me with substantial practice in coding,
                problem-solving, and collaborative work.
              </p>
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="#facebook"
                  className="text-smallTextColor text-[20px] font-[600]"
                >
                  <i class="ri-facebook-circle-fill"></i>
                </a>
              </span>

              <span>
                <a
                  href="#github"
                  className="text-smallTextColor text-[20px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>

              <span>
                <a
                  href="#linkedin"
                  className="text-smallTextColor text-[20px] font-[600]"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* end left content */}

          {/* hero img */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" className="" />
            </figure>
          </div>
          {/* end hero img */}

          {/* right content */}
          <div
            className="md:basis-1/5 flex justify-between tẽt-center mt-10 flex-wrap gap-3 md:mt-0
          md:flex-col md:justify-end md:text-end"
          >
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={3} duration={2} suffix="+" />
              </h2>
              <p className="text-smallTextColor font-[600] text-[16px]">
                Years of Study
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={10} duration={2} suffix="+" />
              </h2>
              <p className="text-smallTextColor font-[600] text-[16px]">
                Project Completed
              </p>
            </div>
          </div>
          {/* end right content */}


        </div>
      </div>
    </section>
  );
};

export default Hero;
