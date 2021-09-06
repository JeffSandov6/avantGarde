import {BrowserRouter, Route, Switch} from 'react-router-dom';
//TODO: importing this causes resizing in fonts & stuff like that, make sure to look out for that
import 'semantic-ui-css/semantic.min.css';

import FloatingButton from './components/common/floatingButton/FloatingButton';
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
