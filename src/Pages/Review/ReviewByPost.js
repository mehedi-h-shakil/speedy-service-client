import React, { useEffect, useState } from "react";
import ReviewComment from "./ReviewComment";

const ReviewByPost = ({ service, reload }) => {
  const [comment, setComment] = useState([]);
  // console.log(comment);

  const id = service?._id;

  useEffect(() => {
    // const url = `http://localhost:5000/reviewsByPost/${id}`;
    // console.log(url);
    fetch(`http://localhost:5000/reviewsByPost/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setComment(data);
      });
  }, [id, reload]);
  return (
    <div>
      <h2 className="text-3xl mt-5 font-semibold">Reviews</h2>
      {comment.map((post) => (
        <ReviewComment key={post._id} post={post}></ReviewComment>
      ))}
    </div>
  );
};

export default ReviewByPost;
