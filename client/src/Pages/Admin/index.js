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

  useEffect(() => {
    callAdmin();
  }, []);

  return (
    <>
      <div
        className="container row"
        style={{ textAlign: 'center', marginBottom: '10%', marginTop: '5%' }}
      >
        <button style={{ margin: '2%', padding: '7px', width: '7%' }}>
          <Link to="/compose" style={{ textDecoration: 'none' }}>
            Compose
          </Link>
        </button>

        <button style={{ margin: '2%', padding: '7px', width: '7%' }}>
          <Link to="/delete" style={{ textDecoration: 'none' }}>
            Delete
          </Link>
        </button>
      </div>
    </>
  );
};

export default Admin;
