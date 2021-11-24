import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const callAdmin = async () => {
    try {
      const res = await fetch('/admin', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = res.json();
      console.log(data);

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate('/login');
    }
  };

  const logout = async () => {
    fetch('/logout', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        navigate('/login');
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
        if (res.status === 200) {
          window.alert('Logged out successfully...');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    callAdmin();
  }, []);

  return (
    <>
      <div
        className="container "
        style={{ marginBottom: '15%', marginTop: '5%' }}
      >
        <Link to="/compose" style={{ textDecoration: 'none', color: 'black' }}>
          <button
            className="btn btn-primary"
            style={{ margin: '2%', padding: '7px' }}
          >
            Compose
          </button>
        </Link>

        <Link to="/delete" style={{ textDecoration: 'none' }}>
          <button
            className="btn btn-primary"
            style={{ margin: '2%', padding: '7px' }}
          >
            Delete / Edit
          </button>
        </Link>

        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button
            className="btn btn-primary"
            style={{ margin: '2%', padding: '7px' }}
            onClick={logout}
          >
            Logout
          </button>
        </Link>
      </div>
    </>
  );
};

export default Admin;
