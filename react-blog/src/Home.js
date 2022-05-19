import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Ferrari', body: 'lorem ipsum', author: 'Majed', id: 1 },
        { title: 'Mercedes', body: 'lorem ipsum', author: 'Majed', id: 2 },
        { title: 'Red Bull', body: 'lorem ipsum', author: 'Majed', id: 3 },
        { title: 'Mclaren', body: 'lorem ipsum', author: 'Majed', id: 4 },
        { title: 'Alpine', body: 'lorem ipsum', author: 'Majed', id: 5 },
        { title: 'Aston Martin', body: 'lorem ipsum', author: 'Majed', id: 6 },
        { title: 'Alpha Tauri', body: 'lorem ipsum', author: 'Majed', id: 7 },
        { title: 'Alfa Romeo', body: 'lorem ipsum', author: 'Majed', id: 8 },
        { title: 'Williams', body: 'lorem ipsum', author: 'Majed', id: 9 },
        { title: 'Haas', body: 'lorem ipsum', author: 'Majed', id: 10 },
    ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Teams:" handleDelete={handleDelete} />
        </div>

    );
}

export default Home;