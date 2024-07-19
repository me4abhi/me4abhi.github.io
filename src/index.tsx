import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import ParticlesBackground from './templates/ParticlesBackground/ParticlesBackground';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <div id="app-container">
        <ParticlesBackground />
        <App />
      </div>
    </Provider>,
  );
} else {
  console.error('Root container is missing index.html');
}
