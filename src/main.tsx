import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import Header from './components/Header/index';
import Home from './pages/Home/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <App >
      <Home/>
      </App>
  </React.StrictMode>,
)
