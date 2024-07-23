import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Post } from '../types/Post';

const BlogReader: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isNightMode, setIsNightMode] = useState<boolean>(true); 

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Network Issue');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError('Failed to fetch posts');
            }
        };

        fetchPosts();
    }, []);

    const toggleNightMode = () => {
        setIsNightMode(!isNightMode);
    };

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className={`w-full overflow-x-hidden ${isNightMode ? 'bg-gradient-to-r from-[#121723] to-[#122435] text-gray-200' : 'bg-gradient-to-r from-gray-100 to-[#a0b4c7] text-gray-900'}`}>
            <div className="container px-10 mx-auto py-12 md:py-24">
                <div className="flex flex-wrap items-center justify-between py-6">
                    <h1 className="text-2xl font-bold mb-2">Blogs</h1>
                    <button onClick={toggleNightMode} className="text-2xl p-2 rounded-full hover:bg-gray-300">
                        {isNightMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
                <p className='mb-8 md:mb-20'>Explore our blogs for valuable resources.</p>
                <ul className='flex flex-wrap -m-4 justify-center'>
                    {posts.map((post) => (
                        <li key={post.id} className={`m-4 w-full sm:w-[45%] lg:w-[30%] min-h-[45vh] ${isNightMode ? 'border' : 'border-black border-2'} rounded-xl shadow ${isNightMode ? 'bg-[#1D2430] hover:bg-slate-600' : 'bg-white hover:bg-gray-200'} hover:shadow-md hover:shadow-slate-200`}>
                            <img src="https://picsum.photos/600/350" alt="img" className='rounded-t-xl w-full' />
                            <div className='p-4'>
                                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                                <p className={`${isNightMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>{post.body.substring(0, 150)}...</p>
                                <hr />
                                <div className='text-xl flex justify-center items-center py-4'>
                                    <span className='flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white'>YP</span>
                                    <div className='px-2 flex justify-center items-center'>
                                        <div className='px-2'>
                                            By Yash Patel
                                        </div>
                                        <div>
                                            |
                                        </div>
                                        <div className='flex-col px-2 text-xs'>
                                            <div className='text-sm font-medium'>
                                                Date
                                            </div>
                                            <div>
                                                July 20, 2024
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogReader;
