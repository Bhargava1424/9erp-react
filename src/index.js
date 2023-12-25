// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddStudent from './components/AddStudent'; // Import AddStudent component
import AddAttribute from './components/AddAttribute'; // Import AddAttribute component
import Reports from './components/Reports'; // Import Reports component
import AddReceipt from './components/AddReceipt'; // Import AddReceipt component
import ListReceipts from './components/ListReceipts'; // Import ListReceipts component
import GlobalStyles from './GlobalStyles';

import './index.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/add-attribute" element={<AddAttribute />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/add-receipt" element={<AddReceipt />} />
          <Route path="/list-receipts" element={<ListReceipts />} />
        </Routes>
      </Router>
      <GlobalStyles />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
