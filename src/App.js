import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";

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
      <Home/>
    </div>
  );
}

export default App;
