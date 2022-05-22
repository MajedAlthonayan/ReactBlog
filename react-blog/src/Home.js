import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {/* Doesn't bother if first is false, therefore null is not passed to bloglist */}
            {blogs && <BlogList blogs={blogs} title="All Teams:" />}
        </div>

    );
}

export default Home;