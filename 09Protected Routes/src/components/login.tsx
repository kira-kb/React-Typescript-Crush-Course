import { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") return setEmail(e.target.value);
    else if (e.target.name === "password") return setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Email: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Login;
