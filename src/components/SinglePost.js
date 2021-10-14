import React, { useEffect } from "react";

const SinglePost = ({ post }) => {
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  });

  return (
    <>
      <p>{post.id}</p>
      <p>{post.userId}</p>
      <p>
        <strong>Title:</strong> {post.title}
      </p>
      <p>
        <strong>Body:</strong>
        {post.body}
      </p>
    </>
  );
};

export default SinglePost;
