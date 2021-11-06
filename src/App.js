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
function App() {
  return (
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
        <Route path="/serviceDetail/:id">
          <ServiceDetail></ServiceDetail>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
