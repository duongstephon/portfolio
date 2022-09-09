import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
