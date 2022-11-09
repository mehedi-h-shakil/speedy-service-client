import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import { Helmet } from "react-helmet";
import AppSection from "../AppSection/AppSection";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home component" />
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <AppSection></AppSection>
      <Contact></Contact>
    </div>
  );
};

export default Home;
