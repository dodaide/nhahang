import React, {useState, useEffect} from "react";
import clsx from 'clsx'
import styles from './blog.module.css'
import {FaEye, FaClock} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function BlogComponent() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blog')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <React.Fragment>
      <h1 className={styles.title}>BLOG</h1>
      <div className={clsx(styles.container,"container")}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {blogs.map( blog => (
            <div key={blog.id} className="col">
              <Link className={styles.cardLink} to={`/blog/${blog.id}`}>
                <div className="card">
                  <img src={blog.imageUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className={clsx(styles.blogTitle,"card-title")}>{blog.title}</h5>
                    <p className={clsx(styles.blogDes,"card-text")}>{blog.shortDescription}</p>
                    <div className={styles.blogInfo}>
                      <span><FaEye />{blog.view} lượt xem</span>
                      <span><FaClock /> {blog.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default BlogComponent ;
