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

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
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
      </Switch>


     

      <Footer />
      {/* Kontakt */}
      {/* nowosci */}
      {/* popularne */}
      {/* konto */}
    </>
  );
}

export default App;
