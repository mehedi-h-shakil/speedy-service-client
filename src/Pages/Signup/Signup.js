import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/login.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Helmet } from "react-helmet";

const Signup = () => {
  const { signup, updateUserProfile } = useContext(AuthContext);

  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    setError();

    signup(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateUser(name, photoURL);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });

    const handleUpdateUser = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL,
      };
      updateUserProfile(profile);
    };
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
    <div className="hero min-h-screen">
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Signup component" />
      </Helmet>
      <div className="hero-content sm:flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="text-4xl font-semibold text-center">Sign Up</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn">
                Sign Up
              </button>
            </div>
          </form>
          <p>{error}</p>
          <div className="flex justify-center ">
            <p className="font-semibold">Or Sign In With</p>
          </div>
          <SocialLogin></SocialLogin>
          <div className="py-5">
            <p className="text-center">
              New to Car Doctor?
              <span className="text-orange-500">
                <Link to="/login"> Sign In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
