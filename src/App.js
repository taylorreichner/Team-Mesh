import React, { useState } from 'react';
import './App.css';
import Splash from './Containers/splash-container/splash';
import Onboarding from './Containers/onboarding-container/onboarding';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Auth from './Containers/auth-container/auth';
import Explore from './Containers/feed-container/explore'
import DetailEmpty from './Containers/detail-container/detailEmpty';
import DetailFilled from './Containers/detail-container/detailFilled';
import Note from './Containers/notes/note'
import Register from './Containers/registration/register';
import Signin from './Containers/registration/signin'


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
        <Route exact path={'/splash'} component={Splash}/>
        <Route exact path={'/'} component={Onboarding} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/auth'} component={Auth} />
        <AuthRoute exact path='/explore' component={Explore} user={user} />
        <AuthRoute exact path='/note' component={Note} userId={userId} user={user}/>
        <AuthRoute path='/explore/:id' component={DetailEmpty} userId={userId} user={user}/>
        <AuthRoute path='/note/:id' component={DetailFilled} user={user} />
        <Route exact path={'/signin'} render={(props) => <Signin {...props} setLoading={setLoading} />}/>
     </Switch>
    </Router>
  );
}

export default App;
