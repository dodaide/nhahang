import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogComponent from "../../components/BlogComponent";

function Blog() {
  return (
    <React.Fragment>
      <Header />
      <BlogComponent />
      <Footer />
    </React.Fragment>
  );
}

export default Blog;
