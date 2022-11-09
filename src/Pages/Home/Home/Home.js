import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import { Helmet } from "react-helmet";
import AppSection from "../AppSection/AppSection";
import Contact from "../Contact/Contact";

const Home = () => {
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
