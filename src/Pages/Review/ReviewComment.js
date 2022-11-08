import React from "react";
import user from "../../assets/user.png";

const ReviewComment = ({ post }) => {
  const { author, img, text } = post;
  return (
    <div className="border-solid border-2 grid grid-cols-4 my-5">
      <div className="flex justify-center items-center">
        <img src={img ? img : user} className="w-16 rounded-full mr-2" alt="" />
        <p>{author}</p>
      </div>
      <div className="bg-slate-300 col-span-3 py-10">
        <p className="ml-4">{text}</p>
      </div>
    </div>
  );
};

export default ReviewComment;
