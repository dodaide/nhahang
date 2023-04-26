import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SliderComponent from "../../components/SliderComponent";
import MenulistComponent from "../../components/MenulistComponent";
import BlogComponent from "../../components/BlogComponent";
import { Link } from "react-router-dom";
import styles from "./home.module.css"

function Home() {
  return (
    <React.Fragment>
      <Header />
      <SliderComponent /> 
      <div className={styles.container}>
        <MenulistComponent limit={8} />
        <div className="d-grid gap-2 col-4 mx-auto">
          <Link className={styles.link} to={"/menu"}>
            <button type="button" className="btn btn-primary btn-lg">Xem thêm</button>
          </Link>
        </div>
      </div>
      <BlogComponent />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
