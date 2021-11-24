import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './bloginfo.css'
const BlogInfo = () => {
  const { id } = useParams();

  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogs, setBlogs] = useState([]);

  const getBlogData = async () => {
    const res = await fetch('/getblogdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: id,
      }),
    });

    const data = await res.json();
    if (!data) {
      console.log('Request failed!!');
      return;
    } else {
      setTitle(data[0].title);
      setAuthor(data[0].author);
      setUrl(data[0].url);
      setContent(data[0].content);
    }
  };

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

  useEffect(() => {
    getBlogData();
  }, []);

  const renderingBlogs = blogs.map((blog, index) => {
    return (
      // <div>
      //   <p>{blog.title}</p>
      //   <img src={blog.url} style={{ width: '100px' }} alt="urlBlog" />
      // </div>
      <ul>
        <img src={blog.url} alt="urlBlog" class="latestblogimg" />
        <a class="latesttext" href="/posts/<%=otBlog[i]._id%>">
          <p>{blog.title}</p>
          <p>{blog.author}</p>
        </a>
      </ul>
    );
  });

  return (
    <>
      {/* <div style={{ display: 'flex' }}>
        <div>
          <h2>{title}</h2>
          <img src={url} alt="blogImage" />
          <br />
          Author - {author}
          <p>{content}</p>
        </div>

        <div>{renderingBlogs}</div>
      </div> */}
      <div class="container">
          <div class="left">
            <h3 style={{textAlign: "center"}}><strong>{title}</strong></h3>
            <img class="blogimage" src={url} alt="blogimage" />
            <p style={{width: "100%",opacity: "0.7"}}>Written By : {author}</p>
            <p class="font1" id="disp">{content}</p>
          </div>
          <div class="right">
            {renderingBlogs}
          </div>
      </div>
    </>
  );
};

export default BlogInfo;
