"use client";

import { useEffect, useState } from "react";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [data, setData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [isLoading, setLoading] = useState<boolean>(false);

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`your email: ${data.email}, your password: ${data.password}`);
  };

  useEffect(() => setLoading(true), []);

  if (!isLoading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChangeEvent}
          value={data.email}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChangeEvent}
          value={data.password}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
