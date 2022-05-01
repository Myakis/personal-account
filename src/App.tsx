import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProfileUser from './components/ProfileUser';
import AuthContainer from './pages/AuthContainer';
import UsersContainer from './pages/UsersContainer';
import Routers from './Routers';

function App() {
  return (
    <div className='App'>
      {/* <Route path='/' element={<UsersContainer />} />
        <Route path='/user/:id' element={<ProfileUser />} />{' '}
        <Route path='/newUser' element={<ProfileUser />} /> */}
      <Routers />
    </div>
  );
}

export default App;
