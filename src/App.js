import React, {lazy, Suspense} from 'reactn';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import './styles.scss';
const AppWrapper = lazy(() => import('./AppWrapper'));

function App() {
  return (
      <div>
        <BrowserRouter>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Suspense fallback={<div>Loading from suspense...</div>}> 
            <AppWrapper/>
          </Suspense>
        </BrowserRouter>
      </div>
  );
}

export default App;

