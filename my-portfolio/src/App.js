import React, { useState, useEffect } from 'react';
import './App.css';

// Login Component
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple hardcoded credentials: username: admin, password: password
    if (username === 'admin' && password === 'promise124') {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// Portfolio Component
function Portfolio({ darkMode, setDarkMode }) {
  const [results, setResults] = useState([]);

  // Fetch the results data from public/results.json
  useEffect(() => {
    fetch('/results.json')
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((err) => console.error('Error fetching results:', err));
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
          <h1>Mokili Promise Pierre</h1>
            <p>
              I am a Year 2 Computer Science student passionate about building creative and functional web experiences.
            </p>
          </div>
        </section>

        <div className="container content">
          {/* Personal Details */}
          <section className="section">
          <h2>Personal Details</h2>
            <ul>
            <li><strong>Full Name:</strong> Mokili Promise Pierre</li>
            <li><strong>Registration:</strong> M23B23/032</li>
            <li><strong>Course:</strong> BSc Computer Science - Year 2</li>
            <li><strong>Interests:</strong> Cybersecurity, DevOps, Game Dev</li>
            </ul>
          </section>

          {/* Profile Picture */}
          <section className="section">
            <h2>Profile Picture</h2>
            <img src="./IMG_4137.jpeg" alt="Mokili Promise Pierre" className="profile" />
          </section>

          {/* Hobby Video */}
          <section className="section">
            <h2>Hobby Video</h2>
            <video className="video" controls>
              <source 
                src="https://www.youtube.com/watch?v=XhP3Xh4LMA8&t=5s" 
                type="video/mp4" 
              />
            </video>
            <p>
              Alternatively, view on{' '}
              <a href="https://www.youtube.com/watch?v=XhP3Xh4LMA8&t=5s" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>.
            </p>
          </section>

          {/* Results Table */}
          <section className="section">
            <h2>Year 1 Semester 1 Results</h2>
            <table>
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Title</th>
                  <th>Grade</th>
                  <th>Credit Units</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index}>
                    <td>{result.courseCode}</td>
                    <td>{result.courseTitle}</td>
                    <td>{result.grade}</td>
                    <td>{result.creditUnits}</td>
                  </tr>
                ))}
                  <tr>
                    <td><strong>Semester GPA</strong></td>
                    <td>4.71</td>
                  </tr>
              </tbody>
            </table>
          </section>

          {/* Contact Information */}
          <section className="section">
            <h2>Contact</h2>
            <p>Email: <a href="kiaripierre0@gmail.com">kiaripierre0@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/pierre-mokili" target="_blank" rel="noopener noreferrer">linkedin.com/in/pierre-mokili</a></p>
            <p>GitHub: <a href="https://github.com/sanepierr" target="_blank" rel="noopener noreferrer">github.com/sanepierr</a></p>
          </section>

          {/* Career Goals */}
          <section className="section">
            <h2>Career Goals</h2>
            <p>
              I aim to become a software engineer specializing in web development, creating impactful digital experiences through innovation and design.
            </p>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Mokili Promise Pierre. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Main App Component
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Update the document theme based on darkMode state
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      {loggedIn ? (
        <Portfolio darkMode={darkMode} setDarkMode={setDarkMode} />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </>
  );
}

export default App;
