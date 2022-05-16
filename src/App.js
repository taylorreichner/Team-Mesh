import './App.css';
import Splash from './Containers/splash-container/splash';
import Onboarding from './Containers/onboarding-container/onboarding';
import Auth from './Containers/auth-container/auth';
import Explore from './Containers/feed-container/explore'
import { Routes, Route } from 'react-router-dom';
import DetailEmpty from './Containers/detail-container/detailEmpty';
import DetailFilled from './Containers/detail-container/detailFilled';
import Note from './Containers/notes/note'

function App() {
  return (
    
      <Routes>
        <Route exact path={'/'} element={<Onboarding />} />
        <Route exact path={'/:id'} element={<DetailEmpty />} />
        <Route exact path={'/explore'} element={<Explore />}/>
        <Route exact path={'/note'} element={<Note />} />
        <Route exact path={'/note/:id'} element={<DetailFilled />} />
        <Route exact path={'/splash'} element={<Splash />} />
        <Route exact path={'/onboarding'} element={<Onboarding />} />
        <Route exact path={'/auth'} element={<Auth />} />
      </Routes>
    
  );
}

export default App;
