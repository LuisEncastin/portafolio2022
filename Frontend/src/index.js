import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';


// assets
import SpinCargaYellow from './styles/animaciones/spinCarga/spinCargaYellow'
// import App from './Routes/App.jsx';

// styles
import './styles/index.css';

const AppLazy = lazy(() => {
  const x = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(import('./Routes/App.jsx'))
    }, 1000)
  })
  return x;
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Suspense fallback={<SpinCargaYellow/>}>
        <AppLazy/>
      </Suspense>
  </React.StrictMode>
);