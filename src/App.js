import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Login from './components/Login';
import AddStudent from './components/AddStudent';
import HeroSection from './components/HeroSection';
import AddAttribute from './components/AddAttribute';
import Reports from './components/Reports';
import AddReceipts from './components/AddReceipts';
import ListReceipts from './components/ListReceipts';
import Concessions from './components/Concessions';
import Login2 from './components/Login2';
import HeroSection2 from './components/HeroSection2';
function App() {
  const [userRole, setUserRole] = useState('');

  const handleLogin = (role) => {
    setUserRole(role);
  };

  return (
<>
  <Router>
    <Routes>
      <Route path='/' element={<Home userRole={userRole} onLogin={handleLogin} />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/AddStudent' element={<AddStudent userRole={userRole}/>}></Route>
      <Route path='/HeroSection' element={<HeroSection/>}></Route>
      <Route path='/AddAttribute' element={<AddAttribute userRole={userRole}/>}></Route>
      <Route path='/Reports' element={<Reports userRole={userRole}/>}></Route>
      <Route path='/AddReceipts' element={<AddReceipts userRole={userRole}/>}></Route>
      <Route path='/ListReceipts' element={<ListReceipts userRole={userRole}/>}></Route>
      <Route path='/Concessions' element={<Concessions userRole={userRole}/>}></Route>
      <Route path='/Login2' element={<Login2 />}></Route>
      <Route path='/HeroSection2' element={<HeroSection2 userRole={userRole} onLogin={handleLogin} />}></Route>
    </Routes>
  </Router>

  
</>
  );
}

export default App;
