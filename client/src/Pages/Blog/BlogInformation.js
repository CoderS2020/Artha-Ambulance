import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './bloginfo.css';
const BlogInfo = () => {
  const { id } = useParams();

  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(``);
  const [blogs, setBlogs] = useState([]);
  var paragraphs = [];

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

  var haystack = content,
    needle = '</p>',
    splitOnFound = haystack
      .split(needle)
      .map(
        function (culm) {
          return (this.pos += culm.length + needle.length);
        },
        { pos: -needle.length }
      )
      .slice(0, -1);

  if (splitOnFound.length === 0) {
    paragraphs.push(haystack);
  } else if (splitOnFound.length === 1) {
    paragraphs.push(haystack.substring(0, splitOnFound[0]));
    paragraphs.push(haystack.substring(splitOnFound[0] + 4));
  } else {
    for (var ind = 0; ind < splitOnFound.length - 1; ind++) {
      if (ind === 0) {
        paragraphs.push(haystack.substring(0, splitOnFound[0]));
      }
      paragraphs.push(
        haystack.substring(splitOnFound[ind] + 4, splitOnFound[ind + 1])
      );
    }
    paragraphs.push(
      haystack.substring(splitOnFound[splitOnFound.length - 1] + 4)
    );
  }
  // console.log(paragraphs);

  const renderingParagraphs = paragraphs.map((para, index) => {
    return (
      <p class="font1" id="disp">
        {para} <br />
      </p>
    );
  });
  const renderingBlogs = blogs.map((blog, index) => {
    return (
      // <div>
      //   <p>{blog.title}</p>
      //   <img src={blog.url} style={{ width: '100px' }} alt="urlBlog" />
      // </div>
      <ul>
        <img src={blog.url} alt="urlBlog" class="latestblogimg" />
        <a class="latesttext" href={`/bloginfo/${blog._id}`}>
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
          <h3 style={{ textAlign: 'center' }}>
            <strong>{title}</strong>
          </h3>
          <img class="blogimage" src={url} alt="blogimage" />
          <p style={{ width: '100%', opacity: '0.7' }}>Written By : {author}</p>
          {/* {content} */}
          {renderingParagraphs}
          {/* <p class="font1" id="disp">
          </p> */}
        </div>
        <div class="right">{renderingBlogs}</div>
      </div>
    </>
  );
};

export default BlogInfo;
