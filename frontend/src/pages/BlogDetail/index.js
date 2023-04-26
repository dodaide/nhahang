import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./blogdetail.module.css"
import clsx from "clsx";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

function BlogDetail() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/blog/${id}`)
    .then(response => response.json())
    .then(data => {
      setBlog(data)
      console.log(data.content);
      fetch(`/api/blog/${id}/views`, { method: 'PATCH' });
    })
    .catch(error => console.error(error));
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className={clsx(styles.container, "container")}>
        <div className={styles.blogContainer}>
          <div className={styles.avatarContainer}>
            <img src="https://via.placeholder.com/80x80" className={clsx(styles.avatar)} alt="..." />
            <div className="col-9">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.date}</p>
            </div>
          </div>
          <ul className={styles.socialMedia}>
            <li className={styles.socialMediaItem}><FaFacebookF /></li>
            <li className={styles.socialMediaItem}><FaTwitter /></li>
            <li className={styles.socialMediaItem}><FaLinkedinIn /></li>
          </ul>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default BlogDetail;
