import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewTable from "./ReviewTable";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setUpdate(!update);
      });
  }, [user?.email, update]);

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

  const handleUpdate = (id, text) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  };
  return (
    <div className="w-9/12 mx-auto">
      <Helmet>
        <title>My Review</title>
        <meta name="description" content="My Review component" />
      </Helmet>
      <div>
        {reviews?.length === 0 ? (
          <div className="py-10">
            <h2 className="text-4xl text-center ">No review were added.</h2>
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
                handleUpdate={handleUpdate}
              ></ReviewTable>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReview;
