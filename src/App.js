import { Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Brands from "./pages/Brands"
import Fallback from "./pages/Fallback";


function App() {
  return(
    <Switch>
       <Route exact path="/">
        <About />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route path="/brands">
        <Brands />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="*">
        <Fallback />
      </Route>
      
    </Switch>
  );
}

export default App;
