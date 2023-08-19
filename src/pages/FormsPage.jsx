
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormsPage() {
  const navigate = useNavigate(); 

  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('https://dummyjson.com/posts', {
        title: title,
        body: body,
        userId: userId
      });

      navigate('/posts');
    } 


  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
      <div className='post-form'>
          <label>User ID: </label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div className='post-form'>
          <label>Title: </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='post-form'>
          <label>Body: </label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button className='post-submit-btn' type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default FormsPage;



