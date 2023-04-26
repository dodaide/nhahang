import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SliderComponent from "../../components/SliderComponent";
import clsx from 'clsx'
import styles from './intro.module.css'

function Intro() {
  return (
    <React.Fragment>
      <Header />
      <SliderComponent /> 
      <div className="container">
        <div className={`${styles.firstIntro} row`}>
          <div className="column col-lg-10">
            <h1>Giới thiệu chung</h1>
            <p>
              Kampong Delivery là website giao hàng của hệ thống Kampong Chicken House nhằm đem lại cho khách hàng trải nghiệm về dịch vụ cung cấp, đóng gói, vận chuyển thực phẩm tận nơi. Chúng tôi đảm bảo sẽ cung cấp cho khách hàng những sản phẩm tươi ngon, chuẩn vệ sinh an toàn thực phẩm , rõ nguồn gốc xuất xứ. Tiêu chí của Kampong Delivery là cung cấp sự tiện lợi, nhanh chóng, an tâm và chu đáo.
            </p>
          </div>
        </div>
        <div className={`${styles.introBlog} row`}>
          <div className="column col-lg-6">
            <h1>Lịch sử hình thành</h1>
            <p>
              Ra đời từ tháng 04 năm 2015 với tên gọi Kampong Chicken House, đây là một mô hình Nhà hàng Á phục vụ nhanh, lý tưởng dành cho xã hội hiện đại. Kể từ khi thành lập cho tới nay, Kampong Chicken House luôn được khách hàng nhắc tới là mô hình nhà hàng đầu tiên phục vụ chuyên biệt Cơm gà Hải Nam chuẩn phong vị Singapore.
              Tính tới tháng 10 năm 2020, Kampong Chicken House đã ra mắt tới 6 cơ sở trên khắp các quận nội thành Hà Nội.
              Với tôn chỉ : " Hạnh phúc đơn giản từ sự AN TÂM ", Kampong mong muốn đem lại cho khách hàng những bữa ăn không những ngon miệng mà còn đảm bảo an toàn cho sức khỏe.
            </p>
          </div>
          <div className="column col-lg-6 g-0">
            <img className={styles.introImg} src="https://delivery.kampong.vn/storage/images/getlstd-property-photo.jpg" />
          </div>
        </div>
      </div>
      <div className={clsx(styles.midBlog, "container-fluid")}>
        <div className="container">
          <div className={clsx(styles.introBlog, "row")}>
            <div className="column col-lg-6 g-0">
              <img className={styles.introImg} src="https://delivery.kampong.vn/storage/images/acb.jpg" />
            </div>
            <div className="column col-lg-6">
              <h1>Quy mô hoạt động</h1>
              <p>
                Có 6 cơ sở hoạt động,có thể tổ chức tiệc lên tới 100 người.
                Nhà hàng có không gian rộng rãi, thoáng mát, bày trí hiện đại, nhiều cây xanh tạo cảm giác dễ chịu, thoải mái, làm nơi nghỉ ngơi thư giãn lý tưởng cho thực khách.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={clsx(styles.introBlog, "row")}>
          <div className="column col-lg-6">
            <h1>Món ăn đặc trưng</h1>
            <p>
              Cơm gà Hải Nam là món ăn làm nên tên tuổi của Kampong Chicken House từ những ngày đầu tiên ra mắt.
              Cơm được nấu theo kiểu Singapore với nước dùng gà béo ngậy. Hạt cơm dẻo, xốp thấm gia vị nước dùng, thơm mùi gừng. Cơm gà Kampong được nâng cấp lên bởi nguyên liệu thịt gà được lựa chọn từ gà ta thả vườn, nuôi trong các trang trại eco với những quy định nghiêm ngặt về tiêu chuẩn vệ sinh chuồng tại và nguồn thức ăn. Chính vì vậy chất lượng thịt gà Kampong luôn được đảm bảo yếu tố thịt chắc, ngọt, da giòn.
              Không thể thiếu được phải kể đến 3 loại sốt đặc trưng : sốt ớt, sốt gừng, sốt xì dầu. được nhà hàng chế biến tươi, trong ngày.
            </p>
          </div>
          <div className="column col-lg-6 g-0">
            <img className={styles.introImg} src="https://delivery.kampong.vn/storage/images/foody-upload-api-foody-mobile-kam-190110115134.jpg" />
          </div>
        </div>
      </div>
    <Footer />
    </React.Fragment>
  );
}

export default Intro;
