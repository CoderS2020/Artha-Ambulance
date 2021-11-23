import React, { useState } from 'react';

const Compose = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('');

  const postDetails = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'arthaproject');
    data.append('cloud_name', 'dzv51jxy4');

    fetch('https://api.cloudinary.com/v1_1/dzv51jxy4/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch('/saveblog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author,
        title,
        content,
        url,
      }),
    })
      .then((res) => {
        res.json();
        if (res.status === 201) window.alert('Post Saved Successfully...');
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    // const data = await res.json();

    // if (res.status === 422 || res.status === 400 || !data) {
    //   window.alert('Something went wrong');
    // } else {
    //   window.alert('Blog posted successfully...');
    // }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="form-group">
          <label>Add Image</label>
          <input
            className="form-control filepond"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
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
          onClick={() => postDetails()}
        >
          Publish
        </button>
      </div>
    </>
  );
};

export default Compose;
