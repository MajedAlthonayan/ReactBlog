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

    return (
        <div className="home">
        <BlogList blogs={blogs} title="All Teams:" />
        <br/>
        <BlogList blogs={blogs.filter((blog) => blog.id === 1 || blog.id === 2 || blog.id === 3)} title="Top Teams:" />
        </div>

    );
}

export default Home;