import clsx from 'clsx'
import styles from './menu.module.css'
import {FaTrash, FaEdit, FaPlusCircle} from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MenulistComponent() {
  const [foodItems, setFoodItems] = useState([]);
  const [foodTypes, setFoodTypes] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);

  const handleFilterChange = (selectedOption) => {
    if(selectedOption){
      setFilteredFoods(foodItems.filter(food => {
          return food.foodType === selectedOption
      }))
    }
    else
      setFilteredFoods(foodItems)
  }

  const deleteFood = (foodID, index) => {
    axios.delete(`api/menu/${foodID}`)
      .then(() => {
        let cloneArray = [...filteredFoods] 
        cloneArray.splice(index, 1)
        setFilteredFoods(cloneArray)
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetch('/api/menu')
      .then(response => response.json())
      .then(data => {
        setFoodItems(data)
        setFilteredFoods(data)
      });
  }, []);

  useEffect(() => {
    fetch('/api/foodtype')
      .then(response => response.json())
      .then(data => setFoodTypes(data));
  }, []);

  return (
    <div className={clsx(styles.container, "container")}>
      <ul className={clsx(styles.filter ,"nav justify-content-center")}>
        <li className="nav-item">
          <a onClick={() => handleFilterChange()} className={clsx(styles.filter, "nav-link")}>Tất cả</a>
        </li>
        {foodTypes.map(foodType => (
          <li key={foodType.id} className="nav-item">
            <a onClick={() => handleFilterChange(foodType.id)} className={clsx(styles.filter, "nav-link")}>{foodType.type}</a>
          </li>
        ))}
      </ul>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {filteredFoods.map((foodItem,index) => (
          <div key={foodItem.id} className="col">
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
                    <Link to={`/menu/${foodItem.id}`}>
                      <button className={clsx(styles.cardLink, "btn btn-primary")} type="button">Chỉnh sửa <FaEdit /></button>
                    </Link>
                    <button className="btn btn-danger" onClick={() => deleteFood(foodItem.id, index)} type="button">Xóa <FaTrash /></button>
                  </div>
                </div>
              </div>
          </div>
        ))}
        <div className="col" style={{position: "relative"}}>
          <Link to={`/menu/add`}>
            <FaPlusCircle className={styles.addIcon}/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MenulistComponent ;
