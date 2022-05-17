import React, { useState } from 'react';
import './App.css';
import Splash from './Containers/splash/splash';
import Onboarding from './Containers/onboarding/onboarding';
import Feed from './Containers/feedcontainer/feed'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DetailEvent from './Containers/detailEvent';
import DetailNote from './Containers/detailNote';
import EventNote from './Containers/detailEvent'
import SignUp from './Containers/registration/signUp';
import LogIn from './Containers/registration/logIn';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState('pending');

  function AuthRoute({ user, component: Component, path, ...props }) {
    const fetchUser = async () => {
      const res = await fetch(
        `http://localhost:3001/api/v1/auth/getuser`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        }
      );
      if (res.status === 200) {
        const userdata = await res.json();

        setUser(userdata.user.userName);
        setLoading('resolved');
      }
      if (res.status !== 200) {
        setLoading('rejected');
      }
    };

    fetchUser();
    if (!user && loading === 'rejected') {
      return <Navigate to="/" />;
    }
    if (user && loading === 'resolved') {
      return (
        <Route exact path={path} {...props}>
          <Component user={user} />
        </Route>
      );
    }
    return null;
  }

  
 

  return (

    <Router>
      <Routes>
      <Route exact path={'/login'} render={(props) => <LogIn {...props} setLoading={setLoading} />}/>
        <Route exact path={'/signup'} element={<SignUp />} />
        <Route exact path={'/'} element={<Onboarding />} />
        <Route exact path={'/:id'} element={<DetailEvent />} />
        <Route exact path={'/feed'} element={<AuthRoute />} >
        <Route exact path={'/feed'} element={<Feed />} />
        </Route>
        <Route exact path={'/eventnote'} element={<EventNote />} />
        <Route exact path={'/eventnote/:id'} element={<DetailNote />} />
        <Route exact path={'/splash'} element={<Splash />} user={user}/>
        <Route exact path={'/onboarding'} element={<Onboarding />} />
      </Routes>
    </Router>
  );
}

export default App;
