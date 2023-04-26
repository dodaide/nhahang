import clsx from 'clsx';
import styles from './login.module.css'
import React, {useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rgUsername, setRgUsername] = useState('');
  const [rgPassword, setRgPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password });
      Cookies.set('session_id', response.data.session_id, {expires: 7});
      window.location.href = '/';
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/register", {
        name,
        rgUsername,
        rgPassword,
      });
      setRegisterSuccess(response.data.message);
    } catch (error) {
      setRegisterSuccess(error.response.data.message);
    }
  };

  return (
    <React.Fragment>
      <div className={`${styles.container} container-fluid`}>
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
            <img src="https://delivery.kampong.vn/storage/banner_image/b43a3ea692227926df0062864f4c4ade.jpg" className={clsx(styles.img, "card-img-top")} alt="..." />
            </div>
            <div className='col-4'>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor='username' className="form-label">Tài khoản</label>
                  <input type="text" id='username' className="form-control" value={username} name="username" onChange={(e) => setUsername(e.target.value)} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Mật khẩu</label>
                  <input type="password" id='password' className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {errorMessage && <div style={{color: "red"}} className="error-message">* {errorMessage}</div>}
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="submit">Đăng nhập</button>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <a className={styles.fogotPassword} href=''>Quên mật khẩu?</a>
                  <hr/>
                  <button className={clsx("btn btn-primary", styles.register)} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Đăng ký</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className={clsx(styles.modalContent, "modal-content")}>
            <form>

              <div className="form-outline mb-4">
                <input type="text" className="form-control" name="name" placeholder='Họ và tên' value={name} onChange={(e) => setName(e.target.value)}/>
              </div>

              <div className="form-outline mb-4">
                <input type="text" className="form-control" name="rgUsername" placeholder='Tài khoản' value={rgUsername} onChange={(e) => setRgUsername(e.target.value)}/>
              </div>

              <div className="form-outline mb-4">
                <input type="password" className="form-control" name="rgUsername" placeholder='Mật khẩu' value={rgPassword} onChange={(e) => setRgPassword(e.target.value)}/>
              </div>

              <div className="d-grid gap-2">
                <button type="submit" onClick={handleRegister} className="btn btn-primary btn-block mb-4">Đăng ký</button>
              </div>
              {registerSuccess && <div style={{color: "red"}} className="error-message">* {registerSuccess}</div>}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginComponent;
