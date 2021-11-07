import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound'
import Header from './Pages/Shared/Header/Header';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/Login/Login/Login';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import SignUp from './Pages/Login/SignUp/SignUp';
import Appoinment from './Pages/Appoinment/Appoinment';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header> </Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/appoinment">
            <Appoinment></Appoinment>
          </PrivateRoute>
          <PrivateRoute path="/serviceDetail/:id">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
