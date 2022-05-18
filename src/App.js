import React, { useState } from 'react';
import './App.css';
import Splash from './Containers/splash/splash';
import Onboarding from './Containers/onboarding/onboarding';
import Feed from './Containers/feedcontainer/feed'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import DetailEvent from './Containers/detailEvent';
import DetailNote from './Containers/detailNote';
import EventNote from './Containers/notes/notes';
import SignUp from './Containers/registration/signUp';
import LogIn from './Containers/registration/logIn';


function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null)
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
        setUserId(userdata.user.userId)
        setUser(userdata.user.userEmail);
        setLoading('resolved');
       
      }
      if (res.status !== 200) {
        setLoading('rejected');
      }
    };
    fetchUser();
    if (!user && loading === 'rejected') {
      return <Redirect to="/" />;
    }
    if (user && loading === 'resolved') {
      return (
        <Route exact path={path} {...props}>
          <Component user={user} userId={userId}/>
        </Route>
      );
    }
    
    return null;
  }
  
 
  
 

  return (

    <Router>
      <Switch>
        <Route exact path={'/splash'} element={<Splash />}/>
        <Route exact path={'/onboarding'} component={Onboarding} />
        <Route exact path={'/signup'} component={SignUp} />
        
        
        <AuthRoute exact path='/feed' component={Feed} user={user} />
        <AuthRoute path='/feed/:id' component={DetailEvent} userId={userId} user={user}/>

        
        <AuthRoute exact path='/notes' component={EventNote} userId={userId} user={user}/>
        <AuthRoute path='/notes/:id' component={DetailNote} user={user} />
        
        
        <Route exact path={'/'} render={(props) => <LogIn {...props} setLoading={setLoading} />}/>
      </Switch>
    </Router>
  );
}

export default App;
