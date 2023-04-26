import styles from './login.module.css'
import React, {useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    try {
      const response = await axios.post('/api/login/admin', { username, password });
      Cookies.set('session_admin', response.data.session_id, {expires: 7});
      setError('')
      window.location.href = '/';
    } catch (error) {
      setError(error.response.data.error)
    }
  };
  
  return (
    <React.Fragment>
      <div className={styles.container}>
          <div className='col-4'>
            <h3 className={styles.title}>Đăng nhập hệ thống</h3>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Tài khoản</label>
              <input type="email" class="form-control" id="exampleInputEmail1" onChange={(e) => setUsername(e.target.value)} aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
              <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" onClick={handleLogin}>Đăng nhập</button>
            </div>
            <p style={{color: "red"}}>
              *{error}
            </p>
          </div>
      </div>
    </React.Fragment>
  );
}

export default LoginComponent;
