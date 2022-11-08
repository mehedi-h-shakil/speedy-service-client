import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/login.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
  const { signup } = useContext(AuthContext);

  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    setError();

    signup(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  };
  return (
    <div className="hero min-h-screen">
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
              <button type="submit" className="btn btn-primary">
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
