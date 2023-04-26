import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./food.module.css"
import clsx from "clsx";
import axios from "axios";

function FoodDetail() {
  const [food, setFood] = useState({});
  const [foodTypes, setFoodTypes] = useState([]);
  const [selectedFoodType, setSelectedFoodType] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/menu/${id}`)
    .then(response => response.json())
    .then(data => {
      setFood(data)
      setSelectedFoodType(data.foodType)
    })
    .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch('/api/foodtype')
      .then(response => response.json())
      .then(data => setFoodTypes(data));
  }, []);

  const updateFood = () => {
    const clone = {...food};
    clone.foodType = selectedFoodType
    setFood(clone)
    axios.put(`/api/menu/${id}`, {...food});
  }

  return (
    <React.Fragment>
      <Header />
      <div className={clsx(styles.container, "container")}>
        <div className="row">
          <div className="col">
            <img src={food.imgUrl} className="card-img-top" alt="..." />
            <div className={clsx(styles.chooseFile, "mb-3")}>
            <label htmlFor="formFile" className="form-label">Nhập URL ảnh</label>
              <input className="form-control" type="text" value={food.imgUrl}
                onChange={(e) => {
                  const clone = {...food};
                  clone.imgUrl = e.target.value
                  setFood(clone)
                }}
                id="formFile" />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Tên món</label>
              <input type="text" className="form-control" id="exampleInputEmail1" value={food.name}
                onChange={(e) => {
                  const clone = {...food};
                  clone.name = e.target.value
                  setFood(clone)
                }}
                aria-describedby="emailHelp" />
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1">Giá</label>
                  <input type="text" id="form3Example1" value={food.price} 
                    onChange={(e) => {
                      const clone = {...food}
                      clone.price = e.target.value
                      setFood(clone)
                    }}
                    className="form-control" />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example2">Số lượng đã bán</label>
                  <input type="text" id="form3Example2" className="form-control" value={food.quantitySolve}
                    onChange={(e) => {
                      const clone = {...food}
                      clone.quantitySolve = e.target.value
                      setFood(clone)
                    }}
                    />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Miêu tả về món</label>
              <textarea className="form-control" id="floatingTextarea" value={food.description}
                onChange={(e) => {
                  const clone = {...food}
                  clone.description = e.target.value
                  setFood(clone)
                }}
                ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Phân loại món</label>
              <div>
                {foodTypes.map(foodType => (
                  <div key={foodType.id} className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="exampleRadios1">
                      {foodType.type}
                    </label>
                    <input className="form-check-input" type="radio" name="exampleRadios" value={foodType.type}
                      checked={selectedFoodType === foodType.id}
                      onChange={() => setSelectedFoodType(foodType.id)}
                      />
                  </div>
                ))}
              </div>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary btn-lg" type="submit" onClick={updateFood}>Lưu</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default FoodDetail;
