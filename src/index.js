import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './Store/Store'

const routeElmt = document.getElementById('root')
const root = createRoot(routeElmt)

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
