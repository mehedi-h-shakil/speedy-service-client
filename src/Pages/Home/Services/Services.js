import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [limitedServices, setLimitedServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services-limited")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setLimitedServices(data);
      });
  }, []);
  return (
    <div className="w-9/12 mx-auto">
      <h2 className="text-5xl p-10 text-center text-orange-500">Services</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
        {limitedServices.map((service) => (
          <ServiceCard key={service?._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="p-5 text-center">
        <Link to="/services">
          <button className="btn">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
