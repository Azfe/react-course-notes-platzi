import { useState, useEffect } from 'react';

const UserListWithLoading = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // dato booleano
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Error en la petición de datos');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, []);

if (isLoading) {
    return <p>Cargando...</p>
}

if (error) {
    return <p>Hubo un error: {error.message}</p>
}

return (
    <div>
        <h3>Lista de usuarios con Loading</h3>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <h4>
                        {user.name}
                    </h4>                    
                </li>
            ))}
        </ul>
    </div>
)
}

export default UserListWithLoading;