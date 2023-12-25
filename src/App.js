// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddStudent from './components/AddStudent';
import GlobalStyles from './GlobalStyles'; // Import the GlobalStyles component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="src\components\HomePage.js" element={<HomePage/>} />
        <Route path="src\components\AddStudent.js" element={<AddStudent/>} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
