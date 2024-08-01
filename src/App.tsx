import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogReader from './components/BogReader';
import BlogDetail from './components/BlogDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogReader />} />
        <Route path="/post/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
