import React, { useEffect } from 'react';
import Navbar from './Navbar';

function AddAttribute({ userRole }) {
  useEffect(() => {
    console.log('AddAttribute Component did mount');

    // Cleanup function (componentWillUnmount)
    return () => {
      console.log('AddAttribute Component will unmount');
    };
  }, []); // Empty dependency array means this effect runs once (on mount)

  console.log('AddAttribute Navbar User Role:', userRole);

  return (
    <>
      <Navbar userRole={userRole} />
      AddAttribute Component
    </>
  );
}

export default AddAttribute;
