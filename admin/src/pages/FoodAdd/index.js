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
  const [selectedFoodType, setSelectedFoodType] = useState();

  useEffect(() => {
    fetch('/api/foodtype')
      .then(response => response.json())
      .then(data => setFoodTypes(data));
  }, []);

  const createNew = () => {
    const clone = {...food};
    clone.foodType = selectedFoodType
    setFood(clone)
    alert("Thêm thành công")
    axios.post('/api/menu', {...food});
  }

  return (
    <React.Fragment>
      <Header />
      <div className={clsx(styles.container, "container")}>
        <div className="row">
          <div className="col">
            <img src={food.imgUrl} className="card-img-top" alt="..." />
            <div className={clsx(styles.chooseFile, "mb-3")}>
            <label for="formFile" class="form-label">Nhập URL ảnh</label>
              <input class="form-control" type="text" value={food.imgUrl}
                onChange={(e) => {
                  const clone = {...food};
                  clone.imgUrl = e.target.value
                  setFood(clone)
                }}
                id="formFile" />
            </div>
          </div>
          <div className="col">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Tên món</label>
              <input type="text" class="form-control" id="exampleInputEmail1" value={food.name}
                onChange={(e) => {
                  const clone = {...food};
                  clone.name = e.target.value
                  setFood(clone)
                }}
                aria-describedby="emailHelp" />
            </div>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form3Example1">Giá</label>
                  <input type="text" id="form3Example1" value={food.price} 
                    onChange={(e) => {
                      const clone = {...food}
                      clone.price = e.target.value
                      setFood(clone)
                    }}
                    class="form-control" />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form3Example2">Số lượng đã bán</label>
                  <input type="text" id="form3Example2" class="form-control" value={food.quantitySolve}
                    onChange={(e) => {
                      const clone = {...food}
                      clone.quantitySolve = e.target.value
                      setFood(clone)
                    }}
                    />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Miêu tả về món</label>
              <textarea class="form-control" id="floatingTextarea" value={food.description}
                onChange={(e) => {
                  const clone = {...food}
                  clone.description = e.target.value
                  setFood(clone)
                }}
                ></textarea>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Phân loại món</label>
              <div>
                {foodTypes.map(foodType => (
                  <div key={foodType.id} class="form-check form-check-inline">
                    <label class="form-check-label" for="exampleRadios1">
                      {foodType.type}
                    </label>
                    <input class="form-check-input" type="radio" name="exampleRadios" value={foodType.type}
                      checked={selectedFoodType === foodType.id}
                      onChange={() => setSelectedFoodType(foodType.id)}
                      />
                  </div>
                ))}
              </div>
            </div>
            <div class="d-grid gap-2">
              <button class="btn btn-primary btn-lg" type="submit" onClick={createNew}>Lưu</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default FoodDetail;
