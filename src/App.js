import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomeResponsive from './pages/home/HomeResponsive'
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavigationResponsive /> */}
        <Switch>
          <Route exact path="/">
            <HomeResponsive/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
