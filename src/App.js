import './App.scss';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router className='app'>
    <Navbar />
    <Switch>
      <Route path='/' exact component={HomePage}/>
      <Route path='/projects'component={HomePage}/>
    </Switch>
    <Footer />
    </Router>
  );
}

export default App;
