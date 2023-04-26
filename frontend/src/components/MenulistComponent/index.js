import clsx from 'clsx'
import styles from './menu.module.css'
import {FaCartPlus} from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MenulistComponent(props) {
  const [foodItems, setFoodItems] = useState([]);
  const [foodTypes, setFoodTypes] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);

  const handleFilterChange = (selectedOption) => {
    if(selectedOption){
      let index = 0;
      setFilteredFoods(foodItems.filter(food => {
        if(index < props.limit){
          index++;
          return food.foodType === selectedOption
        }
      }))
    }
    else
      setFilteredFoods(foodItems.filter((_, index) => index < props.limit))
  }

  useEffect(() => {
    fetch('/api/menu')
      .then(response => response.json())
      .then(data => {
        setFoodItems(data)
        setFilteredFoods(data.filter((_, index) => index < props.limit))
      });
  }, []);

  useEffect(() => {
    fetch('/api/foodtype')
      .then(response => response.json())
      .then(data => setFoodTypes(data));
  }, []);

  return (
    <div className="container">
      <ul className={clsx(styles.filter ,"nav justify-content-center")}>
        <li className="nav-item">
          <a onClick={() => handleFilterChange()} className={clsx(styles.filter, "nav-link")} aria-current="page">Tất cả</a>
        </li>
        {foodTypes.map(foodType => (
          <li key={foodType.id} className="nav-item">
            <a onClick={() => handleFilterChange(foodType.id)} className={clsx(styles.filter, "nav-link")} aria-current="page">{foodType.type}</a>
          </li>
        ))}
      </ul>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {filteredFoods.map(foodItem => (
          <div key={foodItem.id} className="col">
            <Link className={styles.cardLink} to={`/menu/${foodItem.id}`}>
              <div className="card">
                <img src={foodItem.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className={clsx(styles.cardTitle,"card-title")}>{foodItem.name}</h5>
                  <p className={clsx(styles.cardDes,"card-text")}>{foodItem.description}</p>
                  <div className={styles.cardSale}>
                    <span className={styles.cardPrice}>{foodItem.price}đ</span>
                    <span>Đã bán: {foodItem.quantitySolve}</span>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">Đặt ngay <FaCartPlus /></button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenulistComponent ;
