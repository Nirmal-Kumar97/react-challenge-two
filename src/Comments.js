import React, { useState, useEffect } from 'react';

function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((data) => setComments(data));
    }, []);

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map((comments) => (
                    <li key={comments.id}>
                        <h3>{comments.id}. {comments.name}</h3>
                        <h5>{comments.email}</h5>
                        <h6>{comments.body}</h6>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;
