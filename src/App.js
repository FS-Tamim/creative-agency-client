import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext } from 'react';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';

import AddServices from './components/Admin/AddServices/AddServices';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Order from './components/Customer/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Reviews from './components/Customer/Reviews/Reviews';
import ServiceList from './components/Customer/ServiceList/ServiceList';
import AllServiceList from './components/Admin/AllServiceList/AllServiceList';




export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/addServices'>
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path='/userServices'>
            <ServiceList></ServiceList>
          </PrivateRoute>
          <Route path='/allServiceList'>
            <AllServiceList></AllServiceList>
          </Route>

          <PrivateRoute path='/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>y
         <PrivateRoute path='/order/:serviceId'>
            <Order></Order>
          </PrivateRoute>
         
          <PrivateRoute path='/review'>
            <Reviews></Reviews>
          </PrivateRoute>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
