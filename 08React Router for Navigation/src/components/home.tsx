import React from "react";
import "./Home.css"; // Import the CSS file for styling

const Home: React.FC = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>My Simple Homepage</h1>
        <p>Welcome to my homepage built with React and TypeScript!</p>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <section className="section">
          <h2>About Us</h2>
          <p>
            This is a simple homepage built using React and TypeScript. It's a
            great starting point for creating modern web applications.
          </p>
        </section>

        <section className="section">
          <h2>Features</h2>
          <ul>
            <li>Minimalistic design</li>
            <li>Responsive layout</li>
            <li>Easy to extend with new features</li>
          </ul>
        </section>

        <section className="section">
          <h2>Contact</h2>
          <p>
            If you have any questions, feel free to{" "}
            <a href="mailto:example@example.com">contact us</a>.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 My Simple Homepage</p>
      </footer>
    </div>
  );
};

export default Home;
