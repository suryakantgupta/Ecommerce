import './App.scss';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminApp from './components/Admin/AdminApp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Header} />
        <Route path='/admin/:page?' exact component={AdminApp} />
      </Switch>
    </Router>
  );
}

export default App;
