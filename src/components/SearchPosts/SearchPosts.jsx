import React, { useEffect } from 'react';

const SearchPosts = () => {
    const [query, setQuery] = React.useState('');
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error("Error fetching data: ", error));
    }, [query]);

    return (
        <div>
            <h3>Lista de Posts</h3>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Buscar posts por título"
            />
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>
                            <h4>
                                {post.title}
                            </h4>
                            <p>
                                {post.body}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SearchPosts;