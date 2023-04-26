import React from "react";
import clsx from 'clsx'
import styles from './uploadimg.module.css'
import { FaPlusCircle } from 'react-icons/fa'

function UploadImg(props) {
  return (
    <div className={clsx(styles.container,"container")}>
      <h1>{props.title}</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card">
            <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="..." />
          </div>
        </div>
        <div className={clsx(styles.add, "col")}>
          <FaPlusCircle className={styles.addIcon}/>
        </div>
      </div>
    </div>
  );
}

export default UploadImg;
