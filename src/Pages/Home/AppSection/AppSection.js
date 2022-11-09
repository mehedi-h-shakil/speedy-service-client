import React from "react";
import app from "../../../assets/app.png";
import playstore from "../../../assets/playstore.png";
import appstore from "../../../assets/appstore.png";

const AppSection = () => {
  return (
    <div className="w-9/12 mx-auto grid lg:grid-cols-2 sm:grid-cols-1 py-20 my-10 rounded-md bg-orange-100">
      <div className="flex justify-center">
        <img className="w-50 h-96" src={app} alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-lg text-green-700 font-semibold">Download App</p>
        <h2 className="text-6xl font-bold">
          Everything is under <br />
          Your Control
        </h2>
        <p className="text-lg">
          You can download this app from appstore/ playstore. You will get all
          the services with better ui/ux. Our app is user friendly. You will 20%
          discount after installing our app and registering for the first time.
        </p>
        <div className="flex ">
          <img className="w-40" src={playstore} alt="" />
          <img className="w-40" src={appstore} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppSection;
