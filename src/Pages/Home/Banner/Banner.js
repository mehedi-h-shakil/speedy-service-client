import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="hero lg:h-[600px] sm:h-full bg-orange-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="w-full lg:h-96 sm:h-64 rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Speedy Service Review</h1>
          <p className="py-6">
            Here you will find different kind of services you want and you will
            find other people's review about this services. You can also give a
            review about any service that you have taken from our site. Please
            feel free you share your thought about our services.
          </p>
          <Link to="/services">
            <button className="btn">Book a service</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
