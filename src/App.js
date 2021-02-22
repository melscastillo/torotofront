import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Project from "./pages/Project";
import "normalize.css";
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/project/:slug">
          <Project />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
