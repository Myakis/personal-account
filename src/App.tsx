import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProfileUser from './components/ProfileUser';
import AuthContainer from './pages/AuthContainer';
import UsersContainer from './pages/UsersContainer';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<UsersContainer />} />
        <Route path='/user/:id' element={<ProfileUser />} />
      </Routes>
    </div>
  );
}

export default App;
