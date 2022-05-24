import React from "react";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ZURU</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="zuru BnB" />
      </Helmet>
      <h1 className="text-3xl font-bold">Hello Badeh!</h1>
    </div>
  );
}

export default App;
