import './App.css';
import Splash from './Containers/splash/splash';
import Onboarding from './Containers/onboarding/onboarding';
import Auth from './Containers/auth/auth';
import Feed from './Containers/feed/feed'
import Notes from './Containers/notes/notes';
import { Routes, Route } from 'react-router-dom';



function App() {
  
  
 

  return (
    
      <Routes>
        <Route exact path={'/splash'} element={<Splash />} />
        <Route exact path={'/onboarding'} element={<Onboarding />} />
        <Route exact path={'/auth'} element={<Auth />} />
        <Route exact path={'/feed'} element={<Feed />}/>
        <Route exact path={'/notes'} element={<Notes />} />
        
      </Routes>
    
  );
}

export default App;
