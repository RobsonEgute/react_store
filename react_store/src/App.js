import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { actions } from './store';
import HomePage from './Pages/HomeP';
import { Logo, SearchBar, List } from './Components/NavigationBar';






function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn);

  

  return (
    
    <div className="App">
    <Router>
    <nav className='nav'>
      <div className='grid col_1'><Logo /></div>
      <div className='grid col_2'><SearchBar /></div>
      <div className='grid col_3'><List /></div>
    </nav>
      
      <Routes>
      <Route path='/home' element={<HomePage />}></Route>
      <Route path='/' element={<HomePage />}></Route>
      {/* <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/profile' element={<Profile />}></Route> */}
      </Routes>
      
      </Router>
    </div>

  );
}

export default App;
