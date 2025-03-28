import { useState, useEffect } from 'react';

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetchinf data: ", error));
    }, []);

    return (
        <div>
            <h3>Lista de usuarios</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h4>
                            {user.name}
                        </h4>
                        <p>
                            {user.address.city}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;