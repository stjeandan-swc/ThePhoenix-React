import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Styling
import GlobalStyle from './components/GlobalStyle';

// Pages
import Landing from './pages/Landing';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Events from './pages/Events';
import Membership from './pages/Membership';
import Rentals from './pages/Rentals';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path='/' component={Landing} exact></Route>
        <Route path='/about' component={AboutUs}></Route>
        <Route path='/contact' component={ContactUs}></Route>
        <Route path='/events' component={Events}></Route>
        <Route path='/membership' component={Membership}></Route>
        <Route path='/rentals' component={Rentals}></Route>
        <Route component={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;
