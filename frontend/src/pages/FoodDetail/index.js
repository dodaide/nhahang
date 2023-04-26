import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./food.module.css"
import clsx from "clsx";
import {FaCartPlus} from 'react-icons/fa'

function FoodDetail() {
  const [food, setFood] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/menu/${id}`)
    .then(response => response.json())
    .then(data => setFood(data))
    .catch(error => console.error(error));
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className={clsx(styles.container, "container")}>
        <div className="row">
          <div className="col">
            <img src={food.imgUrl} className="card-img-top" alt="..." />
          </div>
          <div className="col">
            <h2 className={clsx(styles.cardTitle,"card-title")}>{food.name}</h2>
            <p className={clsx(styles.cardDes,"card-text")}>{food.description}</p>
            <div className={styles.cardSale}>
              <span className={styles.cardPrice}>Giá: {food.price}</span>
              <span>Đã bán {food.quantitySolve}</span>
            </div>
            <div className={styles.cardSale}>
              <input type="number" className={clsx(styles.cardAmount, styles.cardPrice)} placeholder="Số lượng"/>
              <button type="button" className="btn btn-primary btn-lg">Thêm vào giỏ hàng <FaCartPlus/></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default FoodDetail;
