import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import "./posts.css";

interface Product {
  id: number;
  title: string;
  body: string;
}

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Product | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch post with id: ${id}`);
        }

        const result: Product = await res.json();
        setPost(result); //
      } catch (error: any) {
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (isLoading) return <h3>Loading...</h3>;
  if (err) return <h3>Error: {err}</h3>;
  if (!post) return <h3>Post not found</h3>;

  return (
    <div className="products-container">
      <h1>Product</h1>
      <div className="product-list">
        <div key={post.id} className="product-item">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
