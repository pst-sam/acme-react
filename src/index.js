import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='719878321739-fg302079rqtg7j8pidppd6apk5hv2f4u.apps.googleusercontent.com'>
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

