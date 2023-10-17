import React, { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((users) => (
                    <li key={users.id}>
                        <h4>{users.name}</h4>
                        <h6>{users.username}</h6>
                        <h6>{users.email}</h6>
                        <h6>{users.phone}</h6>
                        <h6>{users.website}</h6>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
