import './App.css';
import Splash from './Containers/splash/splash';
import Onboarding from './Containers/onboarding/onboarding';
import Auth from './Containers/auth/auth';
import Feed from './Containers/feedcontainer/feed'
import { Routes, Route } from 'react-router-dom';
import DetailEvent from './Containers/detailEvent';
import DetailNote from './Containers/detailNote';
import EventNote from './Containers/detailEvent'



function App() {
  
  
 

  return (
    
      <Routes>
        
        <Route exact path={'/'} element={<Onboarding />} />
        <Route exact path={'/:id'} element={<DetailEvent />} />
        <Route exact path={'/feed'} element={<Feed />}/>
        <Route exact path={'/eventnote'} element={<EventNote />} />
        <Route exact path={'/eventnote/:id'} element={<DetailNote />} />
        <Route exact path={'/splash'} element={<Splash />} />
        <Route exact path={'/onboarding'} element={<Onboarding />} />
        <Route exact path={'/auth'} element={<Auth />} />
        
      </Routes>
    
  );
}

export default App;
