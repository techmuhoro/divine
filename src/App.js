import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
