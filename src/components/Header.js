import React from 'react';
import GoogleAuth from './GoogleAuth';
import PageNav from './PageNav';
// import Login from './Login';
// import Logout from './Logout';


function Header() {
  return (
    <header className='app-header'>
      <img src='logo512.png' alt='React logo' />
      <h1>The React Quiz</h1>
      {/* <Login/>
      <Logout/> */}
      <PageNav/>
      <GoogleAuth/>
    </header>
  );
}

export default Header;
