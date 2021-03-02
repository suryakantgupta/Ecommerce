import './App.scss';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminApp from './components/Admin/AdminApp';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Switch>
        <Route path='/' exact component={Header} />
        <Route path='/admin/:page?' exact component={AdminApp} />
      </Switch>
      </Provider>
    </Router>
  );
}

export default App;
