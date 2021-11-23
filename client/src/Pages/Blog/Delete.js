import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const DeletePage = () => {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async (e) => {
    const res = await fetch('/getblogs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (!data) {
      console.log('Request failed!!');
    } else {
      setBlogs(data);
      //   console.log(data);
      //   console.log(blogs);
    }
  };

  const deleteBlog = async (blogid) => {
    const res = await fetch('/deleteblog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blogid,
      }),
    });

    const data = await res.json();
    if (!data) {
      console.log('Request failed!!');
    } else {
      //   console.log('Deleted the blog');
      getAllBlogs();
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const renderingBlogs = blogs.map((blog, index) => {
    return (
      <>
        <div className="container-fluid">
          <blockquote style={{ backgroundColor: 'cornsilk' }}>
            <div className="home-article row">
              <div className="home-article-img col-sm">
                <img src={blog.url} style={{ width: '75%' }} alt="article" />
              </div>
              <div
                className="home-article-content font1 col-sm"
                style={{ padding: '20px' }}
              >
                <h3 className="card-title">{blog.title}</h3>
                <p>{blog.content.substring(0, 100)}</p>
                <Link to={`/bloginfo/${blog._id}`}>
                  <h5>Read More</h5>
                </Link>
                <blockquote>
                  <div>
                    Author Name-{blog.author}
                    {/* <h5><span><%=post.time%></span></h5> */}
                  </div>
                </blockquote>
                <button onClick={(e) => deleteBlog(blog._id)}>
                  <h5>Delete</h5>
                </button>

                <button style={{ margin: '5px' }}>
                  <Link
                    to={`/editblog/${blog._id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <h5>Edit</h5>
                  </Link>
                </button>
              </div>
            </div>
          </blockquote>
          <br />
        </div>
      </>
    );
  });

  return (
    <>
      <div>{renderingBlogs}</div>
    </>
  );
};

export default DeletePage;
