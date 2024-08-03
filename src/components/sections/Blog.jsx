import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaTag, FaUser, FaComments, FaSearch } from 'react-icons/fa';

const blogPosts = [
  {
    title: 'Innovations in Web Development',
    date: 'August 1, 2024',
    image: 'https://i.ibb.co/vL8d37X/received-862180895775903.png',
    summary: 'Explore cutting-edge technologies and techniques that are shaping the future of web development.',
    tags: ['Web Development', 'Technology'],
    author: 'Marvin',
    comments: 5,
    link: '#',
  },
  {
    title: 'UI/UX Design Trends for 2024',
    date: 'July 24, 2024',
    image: 'https://i.ibb.co/vL8d37X/received-862180895775903.png',
    summary: 'Dive into the top UI/UX design trends that are expected to dominate the scene in 2024.',
    tags: ['UI/UX', 'Design'],
    author: 'John Paul',
    comments: 3,
    link: '#',
  },
  {
    title: 'Optimizing Performance in React Applications',
    date: 'July 10, 2024',
    image: 'https://i.ibb.co/7Gcdhpf/received-7969218799791176.png',
    summary: 'Learn practical strategies for enhancing the performance of your React applications.',
    tags: ['React', 'Performance'],
    author: 'Melvin Jones',
    comments: 8,
    link: '#',
  },
  {
    title: 'Mastering CSS Grid and Flexbox',
    date: 'June 20, 2024',
    image: 'https://i.ibb.co/7Gcdhpf/received-7969218799791176.png',
    summary: 'Understand the power of CSS Grid and Flexbox for building modern responsive layouts.',
    tags: ['CSS', 'Layout'],
    author: 'Pat',
    comments: 10,
    link: '#',
  },
];

const uniqueTags = [...new Set(blogPosts.flatMap(post => post.tags))];

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    function handleResize() {
    
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedTag || post.tags.includes(selectedTag))
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 lg:px-8 bg-base-200">
      <div className="sticky top-0 z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mb-10 bg-base-200 p-4 rounded">
        <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-0">Latest Insights</h1>
        <div className="flex space-x-2">
          <div className="relative w-full max-w-xs">
            <FaSearch className="absolute inset-y-0 left-0 ml-3 my-auto text-gray-500" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered pl-10 w-full"
            />
          </div>
          <select
            className="select select-bordered w-full max-w-xs"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}>
            <option value="">All Tags</option>
            {uniqueTags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
          </select>
        </div>
      </div>

      {currentPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {currentPosts.map((post, index) => (
            <BlogPost key={index} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-xl text-center text-gray-600">No posts found matching your criteria.</p>
      )}

      <Pagination postsPerPage={postsPerPage} totalPosts={filteredPosts.length} paginate={paginate} currentPage={currentPage} />
    </div>
  );
}

function BlogPost({ post }) {
  return (
    <div className="relative overflow-hidden bg-base-100 shadow-lg rounded-lg transition transform hover:shadow-2xl hover:scale-105 duration-300">
      <img
        src={post.image}
        alt={post.title}
        className="object-cover w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-t-lg"
      />
      <div className="p-6">
        <h2 className="text-lg md:text-xl font-semibold text-base-content mb-2">{post.title}</h2>
        <p className="text-xs md:text-sm text-base-content flex items-center mb-2">
          <FaCalendarAlt className="mr-2 text-primary" />
          {post.date}
        </p>
        <p className="text-xs md:text-sm text-base-content flex items-center mb-4">
          <FaUser className="mr-2 text-primary" />
          {post.author}
        </p>
        <p className="text-sm text-base-content mb-4">{post.summary}</p>
        <div className="flex justify-between items-center">
          <a href={post.link} className="btn btn-primary btn-sm transition-all duration-200 hover:shadow-lg">
            Read more
          </a>
          <span className="flex items-center text-xs md:text-sm text-base-content">
            <FaComments className="mr-1" />
            {post.comments} Comments
          </span>
        </div>
      </div>
    </div>
  );
}

function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="w-full py-4 flex justify-center">
      <ul className="flex space-x-2">
        {pageNumbers.map(number => (
          <li key={number} className={`cursor-pointer ${currentPage === number ? 'font-bold' : ''}`}>
            <button onClick={() => paginate(number)} className={`btn btn-outline btn-sm ${currentPage === number ? 'bg-primary text-white' : ''}`}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}