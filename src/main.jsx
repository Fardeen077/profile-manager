import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import store from './redux/store.js';
import { Provider } from 'react-redux';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
