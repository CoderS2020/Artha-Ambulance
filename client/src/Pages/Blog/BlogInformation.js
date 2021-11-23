import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

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
      <div>
        <p>{blog.title}</p>
        <img src={blog.url} style={{ width: '100px' }} alt="urlBlog" />
      </div>
    );
  });

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div>
          <h2>{title}</h2>
          <img src={url} alt="blogImage" />
          <br />
          Author - {author}
          <p>{content}</p>
        </div>

        <div>{renderingBlogs}</div>
      </div>
    </>
  );
};

export default BlogInfo;
