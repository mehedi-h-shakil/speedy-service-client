import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Review from "../../Review/Review";
import ReviewByPost from "../../Review/ReviewByPost";

const ServiceDetails = () => {
  const service = useLoaderData();
  const [reload, setReload] = useState(false);
  const { title, img, description, price, rating } = service;
  return (
    <div className="w-9/12 mx-auto p-10">
      <div className="flex justify-center">
        <img src={img} className="w-full h-[700px]" alt="" />
      </div>

      <h2 className="text-4xl mt-5 font-bold">{title}</h2>
      <p className="mt-5 text-xl">{description}</p>
      <div>
        <h2 className="text-3xl mt-5">
          Price: <span className="text-orange-500">${price}</span>
        </h2>
        <p className="mt-5 text-xl">Rating: {rating}</p>
      </div>
      <div>
        <ReviewByPost service={service} reload={reload}></ReviewByPost>
        <Review
          service={service}
          reload={reload}
          setReload={setReload}
        ></Review>
      </div>
    </div>
  );
};

export default ServiceDetails;
