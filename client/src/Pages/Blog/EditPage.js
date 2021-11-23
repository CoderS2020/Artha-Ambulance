import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const EditPage = () => {
  const { id } = useParams();

  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const updateImage = (imageData) => {
    const data = new FormData();
    data.append('file', imageData);
    data.append('upload_preset', 'arthaproject');
    data.append('cloud_name', 'dzv51jxy4');

    fetch('https://api.cloudinary.com/v1_1/dzv51jxy4/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        // console.log(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePost = () => {
    fetch('/updateblog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        author,
        title,
        content,
        url,
      }),
    })
      .then((res) => {
        res.json();
        if (res.status === 201) window.alert('Post Updated Successfully...');
      })
      .then((data) => {
        getBlogData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  useEffect(() => {
    getBlogData();
  }, []);
  // console.log(image);
  return (
    <>
      <div className="container-fluid">
        <div className="form-group">
          <img src={url} width="20%" style={{ border: '2px solid black' }} />
          <br />
          <label>Add Image</label>
          <input
            className="form-control filepond"
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
              updateImage(e.target.files[0]);
            }}
          />
          <label>Author</label>
          <input
            className="form-control"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {/* <label>Url to the blog</label>
    <input className="form-control" name="url" type="link" /> */}
          <label>Title</label>
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Post</label>
          <textarea
            className="form-control"
            w
            name="postBody"
            rows="5"
            cols="30"
            id="a"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <button
          className="btn btn-primary"
          name="button"
          onClick={() => updatePost()}
        >
          Publish
        </button>
      </div>
    </>
  );
};

export default EditPage;
