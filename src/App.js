import {useEffect, lazy, Suspense} from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import {useBooksContext} from './utilities/context';
import Home from "./pages/Home";

const  Contact = lazy(()=>import("./pages/Contact"));
const Profile = lazy(()=>import("./pages/Profile"));
const Catalog = lazy(()=>import("./pages/Catalog"));
const PostDetails = lazy(()=>import("./pages/PostDetails"));
const BookPage = lazy(()=>import("./pages/Bookpage"));


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
      <Suspense fallback={<span>Loading...</span>}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/kontakt" render={()=><Contact/>}/>
        <Route path="/konto" render={()=><Profile/>}/>
        <Route path="/post/:id" render={()=><PostDetails/>}/>
        <Route path="/katalog/:id" render={()=><BookPage/>}/>
        <Route path="/katalog" render={()=><Catalog/>}/><Catalog/>
      </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
