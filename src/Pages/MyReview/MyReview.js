import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewTable from "./ReviewTable";
import toast from "react-hot-toast";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Review Deleted successfully");
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  return (
    <div className="w-9/12 mx-auto">
      <div>
        {reviews?.length === 0 ? (
          <div className="py-10">
            <h2 className="text-4xl text-center ">User has no review.</h2>
            <p className="text-center text-xl mt-3">
              Please take a loot at our{" "}
              <Link className="underline text-orange-500" to="/services">
                services
              </Link>
            </p>
          </div>
        ) : (
          <div>
            {reviews.map((review) => (
              <ReviewTable
                key={review._id}
                review={review}
                handleDelete={handleDelete}
              ></ReviewTable>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReview;
