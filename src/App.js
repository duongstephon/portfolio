import './App.scss';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
    <Navbar />
    <HomePage />
    <Footer />
    </div>
  );
}

export default App;
