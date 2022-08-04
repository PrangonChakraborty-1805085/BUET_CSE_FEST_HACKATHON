import React from 'react'
import Courses from '../../components/body/Courses';
import Navbar from '../../components/Navbar'
import { useStateValue } from '../../StateProvider';

export default function index() {
  const [{user},dispatch]=useStateValue();
  console.log('user in courses page ',user);
    return (
    <div>
        <Navbar/>
         {user && <Courses/>} 
    </div>
  )
}
