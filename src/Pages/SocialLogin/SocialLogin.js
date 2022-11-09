import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        // console.log(user);
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
        // setError(err);
      });
  };

  return (
    <div className="mt-5 flex gap-4 justify-center">
      <button onClick={handleGoogleSignIn} className="text-4xl btn-ghost">
        <FcGoogle></FcGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
