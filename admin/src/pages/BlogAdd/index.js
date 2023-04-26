import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./blogdetail.module.css"
import clsx from "clsx";
import React, {useState, useEffect} from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../../components/BlogEditor";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function BlogDetail() {
  const [blog, setBlog] = useState({});
  const [content, setContent] = useState('');

  const updateBlog = () => {
    let clone = {...blog};
    clone.content = content
    setBlog(clone)
    axios.post(`/api/blog`, {...clone});
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
                theme="snow"
                modules={modules('t1')}
                formats={formats}
                value={content}
                onChange={handleChange}
              />
              <label className="font-weight-bold form-label"> Tải ảnh thumbnail</label>
              <input type="text" placeholder="Nhập url của ảnh" className="form-control" id="formFile"
                value={blog.imgUrl}
                onChange={(e) => {
                  const clone = {...blog};
                  clone.imgUrl = e.target.value
                  setBlog(clone)
                }}
              />
            </div>
            <img src={blog.imgUrl||"https://via.placeholder.com/400x100"} className="card-img-top" alt="..." />
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
