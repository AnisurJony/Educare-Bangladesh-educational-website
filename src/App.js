
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import ContactUs from './components/Contact us/ContactUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/services/Services';


function App() {
  return (
    <div className="App">

      <Router>

        <Header></Header>

        <Switch>

          <Route path="/home">


            <Home></Home>


          </Route>
          <Route path="/services">

            <Services></Services>

          </Route>
          <Route path="/about">

            <About></About>

          </Route>
          <Route path="/blogs">

            <Blogs></Blogs>

          </Route>
          <Route path="/contact">

            <ContactUs></ContactUs>

          </Route>

          <Route exact path="/">

            <Home></Home>

          </Route>
          <Route path="/*">

            <NotFound></NotFound>

          </Route>

        </Switch>

        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
