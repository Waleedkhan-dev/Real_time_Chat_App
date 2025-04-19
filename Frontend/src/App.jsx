import { Fragment, useContext } from 'react';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SigUpPage from './Pages/SigUpPage';
import SigninPage from './Pages/SigninPage';
import Settings from './Pages/Settings';
import ProfilePage from './Pages/ProfilePage';
import { AuthContext } from './context/AuthContext';
import React from 'react';
import Sidebar from './components/ChatSection/Sidebar';
import ChatWindow from './components/ChatSection/ChatWindow';

const ProtectedRoute = ({ element }) => {
  const { user } = useContext(AuthContext);
  return user ? element : <Navigate to="/sigin" />;
};

function App() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <h1>Loading...</h1>;

  return (
    <Fragment >
      <div data-theme="retro">
        <Navbar />
        {user && <Sidebar />}
        {user && <ChatWindow />}

        <Routes>
          <Route>
            <Route path='/'
              element={user ? <Navigate to="/home" /> : <Navigate to="/signin" />}
            />


          </Route>
          <Route path="/signup" element={!user ? <SigUpPage /> : <Navigate to="/" />} />
          <Route path="/signin" element={!user ? <SigninPage /> : <Navigate to="/" />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
