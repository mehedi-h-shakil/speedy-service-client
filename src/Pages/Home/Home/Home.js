import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home component" />
      </Helmet>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
