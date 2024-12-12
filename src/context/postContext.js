import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

// context
const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  // Fetch paginated posts
  const getAllPosts = useCallback(async (nextPage = 1) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${nextPage}&_limit=10`
      );
      setPosts((prevPosts) => (nextPage === 1 ? data : [...prevPosts, ...data]));
      setPage(nextPage);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <PostContext.Provider value={[posts, setPosts, getAllPosts, page, setPage]}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
