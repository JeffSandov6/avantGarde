import {BrowserRouter, Route, Switch} from 'react-router-dom';

import FloatingButton from './components/common/floatingButton/FloatingButton';
import HomeResponsive from './pages/home/HomeResponsive'
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavigationResponsive /> */}
        <FloatingButton />
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
