import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UploadImg from "../../components/UploadImg";

function Promote() {
  return (
    <React.Fragment>
      <Header />
      <UploadImg title="Ảnh Slide"/>
      <UploadImg title="Ảnh đăng nhập"/>
      <Footer />
    </React.Fragment>
  );
}

export default Promote;
