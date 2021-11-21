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
  });

  return (
    <>
      <button>
        <Link to="/">Compose</Link>
      </button>
      <button>
        <Link to="/">Delete</Link>
      </button>
    </>
  );
};

export default Admin;
