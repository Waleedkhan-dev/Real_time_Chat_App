import React, { Fragment, useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import SigninPage from './Pages/SigninPage';
import SignUpPage from './Pages/SigUpPage';
import Settings from './Pages/Settings';
import ProfilePage from './Pages/ProfilePage';
import MainDashbord from './Pages/MainDashbord';

import { AuthContext } from './context/AuthContext';

function App() {
  const { user, loading } = useContext(AuthContext);
  console.log("Current user:", user);

  if (loading) return <h1>Loading...</h1>;

  return (
    <Fragment>
      <Routes>
        {/* Protected Route: Dashboard */}
        <Route
          path="/"
          element={user ? <MainDashbord /> : <Navigate to="/signin" />}
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
