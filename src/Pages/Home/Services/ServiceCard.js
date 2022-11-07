import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price, description, rating } = service;
  return (
    <div>
      <div className="card w-96 h-[500px] shadow-lg">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} className="w-96 h-64" alt="car!" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 100)}...</p>
          <div className="flex justify-between">
            <p>Price: {price}</p>
            <p className="text-end">Rating: {rating}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}>
              <button className="btn">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
