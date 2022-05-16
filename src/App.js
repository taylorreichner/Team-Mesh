import './App.css';
import SignIn from './Containers/signIn';
import Feed from './Containers/feed'
import Onboarding from './Containers/onboarding';
import EventNote from './Containers/eventNote';
import { Routes, Route } from 'react-router-dom';
import DetailEvent from './Containers/detailEvent';
import DetailNote from './Containers/detailNote';



function App() {
  
  
 

  return (
    
      <Routes>
        
        <Route exact path={'/'} element={<Onboarding />} />
        <Route exact path={'/:id'} element={<DetailEvent />} />
        <Route exact path={'/signin'} element={<SignIn />} />
        <Route exact path={'/feed'} element={<Feed />}/>
        <Route exact path={'/eventnote'} element={<EventNote />} />
        <Route exact path={'/eventnote/:id'} element={<DetailNote />} />
        
      </Routes>
    
  );
}

export default App;
