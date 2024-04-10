import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './scss/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          {/* <Routes>
            <Route />
          </Routes> */}
          <NotFound />
        </div>
      </div>
    </div>
  );
}

export default App;
