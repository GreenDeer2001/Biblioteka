import "./styles/main.scss";
import {useEffect} from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News/News";
import Info from "./containers/Info";
import Contact from "./containers/Contact";
import Catalog from "./containers/Catalog";
import Footer from "./components/Footer";
import BookPage from "./containers/Bookpage";
import PostDetails from "./containers/PostDetails";
import Login from "./components/Login";
import {useBooksContext} from './utilities/context';
import Profile from "./containers/Profile";

function App() {
  const { pathname } = useLocation();
  const {showLoginForm} = useBooksContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>

    {showLoginForm && <Login/>}
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <News />
          <Info />
        </Route>
        <Route path="/nowosci" exact>
          <News />
          <Info />
        </Route>
        <Route path="/kontakt"><Contact/></Route>
        <Route path="/post/:id"><PostDetails/></Route>
        <Route path="/katalog/:id"><BookPage/></Route>
        <Route path="/katalog"><Catalog/></Route>
        <Route path="/konto"><Profile/></Route>
      </Switch>


     

      <Footer />
  
    </>
  );
}

export default App;
