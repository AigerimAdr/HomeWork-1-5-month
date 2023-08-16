import { useState, useEffect } from 'react';
import axios from 'axios';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
        .then(response => {
            const data = response.data;
            setPosts(data.posts);
        })
        .catch(error => {
            console.error('Ошибка при получении данных:', error);
        });
    }, []);

    return (
        <div>
        {posts.map((post) => (
            <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            </div>
        ))}
        </div>
    );
};

export default PostsPage;
