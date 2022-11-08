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
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
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
