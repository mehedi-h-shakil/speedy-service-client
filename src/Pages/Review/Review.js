import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Review = ({ service, reload, setReload }) => {
  const { user } = useContext(AuthContext);

  // console.log(service);

  // console.log(id);

  // console.log(author, img);
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const reviewText = form.text.value;

    const review = {
      id: service?._id,
      author: user?.displayName,
      img: user?.photoURL,
      text: reviewText,
      email: user?.email,
      service: service?.title,
    };

    fetch("https://speedy-service-review-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        setReload(!reload);
        form.reset();
        // console.log(data);
      })
      .catch((err) => console.error(err));
  };

  return user?.uid ? (
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
  ) : (
    <div>
      <h2 className="text-3xl mt-5">
        Please
        <Link to="/login" className="text-orange-400 mx-2 underline">
          Login
        </Link>
      </h2>
    </div>
  );
};

export default Review;
