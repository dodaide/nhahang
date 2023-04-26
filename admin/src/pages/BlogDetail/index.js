import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./blogdetail.module.css"
import clsx from "clsx";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../../components/BlogEditor";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function BlogDetail() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/api/blog/${id}`)
    .then(response => response.json())
    .then(data => {
      const date = new Date(data.date);
      const isoDate = date.toISOString();
      const formattedDate = isoDate.substring(0, 10); // '2023-04-15'
      data.date = formattedDate;
      setBlog(data);
      setContent(data.content)
    })
    .catch(error => console.error(error));
  }, []);

  const updateBlog = () => {
    let clone = {...blog};
    clone.content = document.getElementById('blogEditor').children[0].children[0].innerHTML

    const date = new Date(clone.date);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekday = weekdays[date.getUTCDay()];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = monthNames[month];
    clone.date = `${weekday}, ${day} ${monthName} ${year} 20:00:00 GMT`;

    axios.put(`/api/blog/${id}`, {...clone});
    alert("Đã lưu")
  }

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <React.Fragment>
      <Header />
      <div className={clsx(styles.container, "container")}>
        <div className="row"> 
          <div className="form-row">
            <div className="form-group col-md-12">
              <label className="font-weight-bold form-label"> Tiêu đề</label>
              <input type="text" name="title" className="form-control" value={blog.title}
                onChange={(e) => {
                  const clone = {...blog};
                  clone.title = e.target.value
                  setBlog(clone)
                }}
                required />
            </div>
            <div className="form-group col-md-12">
              <label className="font-weight-bold form-label"> Mô tả</label>
              <textarea className="form-control" id="floatingTextarea"
                value={blog.shortDescription}
                onChange={(e) => {
                  const clone = {...blog};
                  clone.shortDescription = e.target.value
                  setBlog(clone)
                }}
              ></textarea>
            </div>
            <div className="form-group col-md-12 editor">
              <label className="font-weight-bold form-label"> Nội dung</label>
              <EditorToolbar toolbarId={'t1'}/>
              <ReactQuill
                id="blogEditor"
                theme="snow"
                modules={modules('t1')}
                formats={formats}
                value={content}
                onChange={handleChange}
              />
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1">Lượt xem</label>
                  <input type="number" id="form3Example1" className="form-control"
                    value={blog.view}
                    onChange={(e) => {
                      const clone = {...blog};
                      clone.view = e.target.value
                      setBlog(clone)
                    }}/>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example2">Ngày đăng</label>
                  <input type="date" id="form3Example2" className="form-control"
                    value={blog.date}
                    onChange={(e) => {
                      const clone = {...blog};
                      clone.date = e.target.value
                      setBlog(clone)
                    }}
                  />
                </div>
              </div>
            </div>
            <label className="font-weight-bold form-label"> Tải ảnh thumbnail</label>
            <input type="text" className="form-control" id="formFile"
              value={blog.imgUrl}
              onChange={(e) => {
                const clone = {...blog};
                clone.imgUrl = e.target.value
                setBlog(clone)
              }}
            />
            <img src={blog.imgUrl} className="card-img-top" alt="..." />
            <div class="d-grid gap-2 mt-5">
              <button class="btn btn-primary btn-lg" type="submit" onClick={updateBlog}>Lưu</button>
            </div>
          </div> 
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default BlogDetail;
