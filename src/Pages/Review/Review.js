import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Review = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const reviewText = form.text.value;
  };
  return (
    <div className="mt-5">
      <h2 className="text-4xl pt-5 font-semibold text-amber-600">Review</h2>
      <p className="py-5">Please share your thought about our service.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="textarea"
          name="text"
          className="input input-bordered w-full h-40"
        />
        <button className="btn mt-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Review;
