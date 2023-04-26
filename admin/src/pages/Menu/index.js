import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MenulistComponent from "../../components/MenulistComponent";

function Menu() {
  return (
    <React.Fragment>
      <Header />
      <MenulistComponent/>
      <Footer />
    </React.Fragment>
  );
}

export default Menu;
