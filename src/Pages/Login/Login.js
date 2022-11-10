import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Helmet } from "react-helmet";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError();

    login(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        // console.log(currentUser);
        //get jwt token
        fetch("https://speedy-service-review-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            localStorage.setItem("speedy-service", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.error(err);
        setError(err);
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
    <div className="hero min-h-screen">
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login component" />
      </Helmet>
      <div className="hero-content sm:flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="text-4xl font-semibold text-center">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
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
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-black">
                Login
              </button>
            </div>
          </form>
          <p className="flex justify-center">{error}</p>
          <div className="flex justify-center ">
            <p className="font-semibold">Or Sign In With</p>
          </div>
          <SocialLogin></SocialLogin>
          <div className="py-5">
            <p className="text-center">
              New to Car Doctor?
              <span className="text-orange-500">
                <Link to="/signup"> Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
