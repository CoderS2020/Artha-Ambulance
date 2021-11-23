/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './blog-style.css';
// import Image from './assets/Landing-Page.jpg';

const Blog = () => {
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
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const renderingBlogs = blogs.map((blog, index) => {
    return (
      <div class="card border-0 " style={{ margin: '2%' }}>
        <div class="post-prev-img">
          <section
            class="scroll-container"
            style={{ alignItems: 'flex-start', height: 'auto' }}
          >
            <div class="outer" style={{ width: '100%' }}>
              <div class="scroll-element js-scroll fade-in">
                <div class="inner">
                  <Link to={`/bloginfo/${blog._id}`}>
                    {' '}
                    <img
                      src={blog.url}
                      alt="animate"
                      class="animate"
                      style={{ height: '260px' }}
                    />{' '}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="card-body p-2">
          <h6 class="card-title py-3">
            <Link to={`/bloginfo/${blog._id}`}>{blog.title}</Link>
          </h6>
          {blog.author}

          <p class="post-prev-text pt-3">{blog.content.substring(0, 100)}</p>
          <Link to={`/bloginfo/${blog._id}`} class="text-link" tabindex="-1">
            Learn More
          </Link>
        </div>
      </div>
    );
  });

  return (
    <>
      <div
        class="
        container-fluid container-background d-flex
        align-items-center
        justify-content-center"
        style={{ color: 'white' }}
      >
        <div class="text-center ">
          <h1 class="blog">BLOG</h1>
        </div>
      </div>
      <div style={{ display: 'flex' }}>{renderingBlogs}</div>
      {/* <nav>
          <ul class="pagination  pl-4 pr-3">
            <li class="page-item p-2"><a class="page-link" href=""><i class="fa fa-chevron-left"></i></a></li>
            <li class="page-item p-2"><a class="page-link" href="">1</a></li>
            <li class="page-item p-2"><a class="page-link" href="">2</a></li>
            <li class="page-item p-2"><a class="page-link" href="">3</a></li>
            <li class="page-item p-2"><a class="page-link" href="">...</a></li>
            <li class="page-item p-2"><a class="page-link" href="">9</a></li>
            <li class="page-item p-2"><a class="page-link" href=""> <i class="fa fa-chevron-right"></i></a></li>        
          </ul>
        </nav> */}
    </>
  );
};

export default Blog;
