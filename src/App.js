import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import { Switch, Route} from 'react-router-dom'
import Searched from "./components/SearchPage/Searched";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ZURU</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="zuru BnB" />
      </Helmet>
      <Header/>
      <Switch>
        <Route path='/search'>
          <Searched/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
