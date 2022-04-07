import './App.css';
import { BrowserRouter} from 'react-router-dom'
import Router from '../routes/Routes'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
