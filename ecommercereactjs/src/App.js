import './App.scss';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Header}/>
      </Switch>
    </Router>
  );
}

export default App;
