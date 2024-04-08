
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/service.css";

const ProductImages = () => {
  //slideshow
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="images-body">
      <div className="inside-images">
        <div className="headings in-images">
          <p className="text-4xl text-lg font-bold text-center">
            Our Key Services
          </p>
          <p className="text-2xl mt-3 text-yellow-300 text-center">
            Explore our comprehensive range of medical services designed to meet
            your healthcare needs.
          </p>
        </div>

        <Slider {...settings}>
          <div id="service-card">
            <h3 className="service"> Pharmacy Service</h3>
            <div className="pharmacy">
              <p>
                {" "}
                Phamarcy is responsible for storing medicine, selling medicine,
                Provide pharmacetical support to clients. it is managed by well
                trained pharmacists
              </p>
            </div>
          </div>
          <div className="service-card">
            <h3 className="service"> Pharmacy Service</h3>
            <div className="pharmacy">
              <p>
                {" "}
                Phamarcy is responsible for storing medicine, selling medicine,
                Provide pharmacetical support to clients. it is managed by well
                trained pharmacists
              </p>
            </div>
          </div>
          <div className="service-card">
            <h3 className="service"> Pharmacy Service</h3>
            <div className="pharmacy">
              <p>
                {" "}
                Phamarcy is responsible for storing medicine, selling medicine,
                Provide pharmacetical support to clients. it is managed by well
                trained pharmacists
              </p>
            </div>
          </div>
          <div className="service-card">
            <h3 className="service"> Pharmacy Service</h3>
            <div className="pharmacy">
              <p>
                {" "}
                Phamarcy is responsible for storing medicine, selling medicine,
                Provide pharmacetical support to clients. it is managed by well
                trained pharmacists
              </p>
            </div>
          </div>
          <div className="service-card">
            <h3 className="service"> Pharmacy Service</h3>
            <div className="pharmacy">
              <p>
                {" "}
                Phamarcy is responsible for storing medicine, selling medicine,
                Provide pharmacetical support to clients. it is managed by well
                trained pharmacists
              </p>
            </div>
          </div>
          <div className="service-card">
            <h3 className="service"> Pharmacy Service</h3>
            <div className="pharmacy">
              <p>
                {" "}
                Phamarcy is responsible for storing medicine, selling medicine,
                Provide pharmacetical support to clients. it is managed by well
                trained pharmacists
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ProductImages;
