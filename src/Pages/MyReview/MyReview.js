import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewTable from "./ReviewTable";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const MyReview = () => {
  const { user, logout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [update, setUpdates] = useState(false);
  // const [update, setUpdate] = useState(false);
  // console.log(reviews);

  useEffect(() => {
    fetch(
      `https://speedy-service-review-server.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("speedy-service")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status !== 0) {
          setReviews(data);
        } else if (data.status === 401 || data.status === 403) {
          logout();
        }
      });
  }, [user?.email, update]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      fetch(`https://speedy-service-review-server.vercel.app/reviews/${id}`, {
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
    fetch(`https://speedy-service-review-server.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdates(!update);
      });
  };

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
            <div className="lg:block hidden">
              <div className="grid lg:grid-cols-8 sm:grid-cols-1 gap-5 w-9/12 mx-auto py-5">
                <div className="col-span-3">
                  <p className="text-2xl font-semibold">Service Name</p>
                </div>
                <div className="col-span-3">
                  <p className="text-2xl font-semibold">Review</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">Edit</p>
                </div>
              </div>
            </div>
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
