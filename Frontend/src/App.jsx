import React, { Fragment, useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/ChatSection/Sidebar';
import ChatWindow from './components/ChatSection/ChatWindow';

import HomePage from './Pages/HomePage';

import SigninPage from './Pages/SigninPage';
import Settings from './Pages/Settings';
import ProfilePage from './Pages/ProfilePage';

import { AuthContext } from './context/AuthContext';
import SignUpPage from './Pages/SigUpPage';

function App() {
  const { user, loading } = useContext(AuthContext);
  console.log("Current user:", user)
  if (loading) return <h1>Loading...</h1>;

  return (
    <Fragment>
      <Navbar />

      {user && (
        <div className="flex">
          <Sidebar />
          <ChatWindow />
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/signin" />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signin"
          element={!user ? <SigninPage /> : <Navigate to="/" />}
        />
        <Route
          path="/settings"
          element={user ? <Settings /> : <Navigate to="/signin" />}
        />
        <Route
          path="/profile"
          element={user ? <ProfilePage /> : <Navigate to="/signin" />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
