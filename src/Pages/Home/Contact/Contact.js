import React from "react";
import contact from "../../../assets/contact.png";

const Contact = () => {
  return (
    <div className="w-9/12 mx-auto grid lg:grid-cols-2 sm:grid-cols-1 py-20">
      <div>
        <img src={contact} alt="" />
      </div>
      <div className="bg-orange-100 px-10 rounded-md">
        <p className="text-lg py-5">Get in touch</p>
        <h2 className="text-4xl pb-10 font-bold">Contact Us</h2>
        <form action="">
          <div className="flex gap-6 justify-center">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Name"
            />
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-center mt-5">
            <input
              type="text"
              className="input input-bordered w-full"
              name=""
              id=""
              placeholder="Number"
            />
          </div>
          <div className="flex justify-center mt-5">
            <button type="submit" className="btn">
              Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
