import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SliderComponent from "../../components/SliderComponent";
import MenulistComponent from "../../components/MenulistComponent";
import styles from './menu.module.css'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <React.Fragment>
      <Header />
      <SliderComponent /> 
      <div className={styles.container}>
        <MenulistComponent limit={Number.POSITIVE_INFINITY} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Menu;
