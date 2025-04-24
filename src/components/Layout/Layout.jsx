import React from "react";
import "./Layout.css"; // we'll create styles here

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2>MindFuel</h2>
        <nav>
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/add">Add Inspiration</a></li>
            <li><a href="/list">All Inspirations</a></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
