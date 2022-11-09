import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet";

const AllServices = () => {
  const allservices = useLoaderData();

  return (
    <div className="w-9/12 mx-auto p-10">
      <Helmet>
        <title>Services</title>
        <meta name="description" content="Services component" />
      </Helmet>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {allservices.length === 0 ? (
          <div className="flex justify-center items-center p-40">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
          </div>
        ) : (
          <>
            {allservices.map((service) => (
              <ServiceCard key={service?._id} service={service}></ServiceCard>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AllServices;
