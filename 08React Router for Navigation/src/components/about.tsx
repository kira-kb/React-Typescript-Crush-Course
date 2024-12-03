import React from "react";
import "./about.css"; // Import the CSS for About page

const About: React.FC = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our mission and values.</p>
      </header>

      {/* Main Content Section */}
      <main className="about-main">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to create simple and useful web applications using
            modern technologies like React and TypeScript.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li>Innovation and creativity</li>
            <li>Quality over quantity</li>
            <li>Continuous learning</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Contact Information</h2>
          <p>
            For inquiries, please contact us at{" "}
            <a href="mailto:contact@company.com">contact@company.com</a>.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="about-footer">
        <p>© 2024 About Us Page</p>
      </footer>
    </div>
  );
};

export default About;
