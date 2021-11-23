import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', password: '' });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
    e.preventDefault();
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { username, password } = user;
    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || res.status === 400 || !data) {
      window.alert('Invalid Credentials');
    } else {
      console.log('Suss');
      console.log(res);
      window.alert('Successfull logged in');
      navigate('/admin');
    }
  };

  return (
    <>
      <div className="container-fluid" style={{ marginBottom: '5%' }}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter username"
            value={user.username}
            onChange={handleInput}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={user.password}
            onChange={handleInput}
          />
        </div>

        <button onClick={submitData} className="btn btn-primary btn-block">
          Submit
        </button>
      </div>
    </>
  );
};

export default Login;
