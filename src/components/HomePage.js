// src/components/HomePage.js
import DummyTable from './DummyTable';
import './HomePage.css';
import Navbar from './Navbar'; 
import React from 'react';


const HomePage = () => {
  return (
    <div className="homepage">
      <div>
        <Navbar />
      </div>     
      
      <h1 className='StudentListHeading'>Students List</h1>
      <div className="StudentList">
        <DummyTable />
      </div>   
    </div>
  );
};

export default HomePage;
