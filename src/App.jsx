import AddInspirationForm from "./components/AddInspirationForm";
import InspirationList from "./components/InspirationList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import React, { useState } from "react";

function App() {
  const [inspirations, setInspirations] = useState([]);
  const handleNewInspiration = (newInspiration) => {
    setInspirations(prev => [newInspiration, ...prev]);
  };
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<h2>Welcome to MindFuel Dashboard</h2>} />
          <Route path="/add" element={
            <AddInspirationForm onInspirationAdded={handleNewInspiration} />
          } />
          <Route path="/list" element={
            <InspirationList inspirations={inspirations} />
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
