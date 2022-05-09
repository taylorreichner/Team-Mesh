import './App.css';
import SignIn from './Containers/signIn';
import Feed from './Containers/feed'
import LandingPage from './Containers/landingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  



  return (
    
      <Routes>
        <Route exact path={'/'} element={<LandingPage />} />
        <Route exact path={'/signin'} element={<SignIn />} />
        <Route exact path={'/feed'} element={<Feed />}/>
      </Routes>
    
  );
}

export default App;
