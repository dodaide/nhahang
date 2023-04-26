import React, { useState, useEffect } from "react";
import clsx from 'clsx'
import styles from './blog.module.css'
import {FaEye, FaClock, FaPlusCircle, FaEdit ,FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import axios from 'axios';

function BlogComponent() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blog')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  const deleteFood = (blogId, index) => {
    axios.delete(`api/blog/${blogId}`)
      .then(() => {
        let cloneArray = [...blogs] 
        cloneArray.splice(index, 1)
        setBlogs(cloneArray)
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <React.Fragment>
      <div className={clsx(styles.container,"container")}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {blogs.map( (blog, index) => (
            <div key={blog.id} className="col">
              <div className="card">
                <img src={blog.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className={clsx(styles.blogTitle,"card-title")}>{blog.title}</h5>
                  <p className={clsx(styles.blogDes,"card-text")}>{blog.shortDescription}</p>
                  <div className={styles.blogInfo}>
                    <span><FaEye />{blog.view} lượt xem</span>
                    <span><FaClock />{blog.date}</span>
                  </div>
                  <div className="d-grid gap-2">
                    <Link to={`/blog/${blog.id}`}>
                      <button className={clsx(styles.cardLink, "btn btn-primary")} type="button">Chỉnh sửa <FaEdit /></button>
                    </Link>
                    <button className="btn btn-danger" onClick={() => deleteFood(blog.id, index)} type="button">Xóa <FaTrash /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col" style={{position: "relative"}}>
            <Link to={`/blog/add`}>
              <FaPlusCircle className={styles.addIcon}/>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BlogComponent ;
