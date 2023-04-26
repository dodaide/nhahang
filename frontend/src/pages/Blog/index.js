import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SliderComponent from "../../components/SliderComponent";
import BlogComponent from "../../components/BlogComponent";

function Blog() {
  return (
    <React.Fragment>
      <Header />
      <SliderComponent /> 
      <BlogComponent />
      <Footer />
    </React.Fragment>
  );
}

export default Blog;
