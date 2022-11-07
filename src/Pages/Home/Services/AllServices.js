import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const AllServices = () => {
  const allservices = useLoaderData();

  return (
    <div className="w-9/12 mx-auto p-10">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-7">
        {allservices.map((service) => (
          <ServiceCard key={service?._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
