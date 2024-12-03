import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Products {
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [data, setData] = useState<Products[]>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string>();
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("error while fetching from jsonServer");
        const result: Products[] = await res.json();
        // console.log(result);
        setData(result);
      } catch (error: any) {
        setErr(error.message);
        // console.log(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (isLoading) return <p>loading...</p>;
  if (err) return <p>Error: {err}</p>;

  return (
    <div className="products-container">
      <h1>Product List</h1>
      <div className="product-list">
        {data.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id} className="product-item">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
