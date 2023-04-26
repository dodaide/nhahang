import clsx from "clsx";
import React from "react";
import styles from "./managermenu.module.css"
import { useState, useEffect } from 'react';
import axios from "axios";

function ManageMenu() {
  const [foodTypes, setFoodTypes] = useState([]);
  const [newFoodTypes, setNewFoodTypes] = useState("");

  const editType = (e) => {
    let thisBtn = e.target
    let input = document.getElementsByClassName("foodType")[thisBtn.dataset.stt]
    if(thisBtn.innerText === "Ok"){
      input.disabled = true
      input.placeholder = input.value
      thisBtn.className = "btn btn-primary me-1"
      thisBtn.innerText = "Chỉnh sửa"
      axios.put(`/api/foodtype`, { id: thisBtn.dataset.id, type: input.value });
      input.value = ""
    }
    else{
      input.disabled = false
      input.value = input.placeholder
      thisBtn.className = "btn btn-warning me-1"
      thisBtn.innerText = "Ok"
    }
  }

  const deleteType = (typeId, index) => {
    fetch('/api/foodtype', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: typeId })
    })
    .then(response => {
      let arr = [...foodTypes]
      arr.splice(index, 1)
      setFoodTypes(arr)
      if (!response.ok) {
        throw new Error('Failed to delete type')
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  const addItem = () => {
    axios.post('/api/foodtype', {type: newFoodTypes})
      .then(response => {
        let inputs = document.getElementsByClassName("foodType")
        let newId = inputs[inputs.length - 1].dataset.id + 1
        const newFoodArr = {id: newId, type: newFoodTypes};
        setFoodTypes([...foodTypes, newFoodArr]);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  useEffect(() => {
    fetch('/api/foodtype')
      .then(response => response.json())
      .then(data => setFoodTypes(data));
  }, []);

  return (
    <div className={clsx(styles.container, "container")}>
      <h4 className="text-center">Quản lý danh mục đồ ăn</h4>
      <div className="col-6 mx-auto">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr className="align-middle">
              <th className="text-center" style={{width: "10%"}}>STT</th>
              <th className="text-center" style={{width: "50%"}}>Loại đồ ăn</th>
              <th className="text-center" style={{width: "40%"}}></th>
            </tr>
          </thead>
          <tbody>
            {foodTypes.map((foodType, index) => (
              <tr className="foodRow" key={foodType.id}>
                <td className="text-center">{index +1}</td>
                <td className="text-center"><input type="text" data-id={foodType.id} className="foodType form-control text-center" placeholder={foodType.type} disabled/></td>
                <td className="text-center">
                  <button type="button" className="btn btn-primary me-1" data-stt={index} data-id={foodType.id} onClick={editType}>Chỉnh sửa</button>
                  <button type="button" className="btn btn-danger" onClick={() => deleteType(foodType.id, index)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-grid gap-2 col-6 mx-auto mt-3">
          <input type="text" placeholder="Thêm loại đồ ăn mới" value={newFoodTypes} onChange={(e) => setNewFoodTypes(e.target.value)} className="form-control text-center"/>
          <button className="btn btn-primary" type="button" onClick={addItem}>Thêm</button>
        </div>
      </div>
    </div>
  );
}

export default ManageMenu;
