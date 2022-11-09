import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet";

const AllServices = () => {
  const allservices = useLoaderData();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-40">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="w-9/12 mx-auto p-10">
      <Helmet>
        <title>Services</title>
        <meta name="description" content="Services component" />
      </Helmet>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {allservices.map((service) => (
          <ServiceCard key={service?._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
