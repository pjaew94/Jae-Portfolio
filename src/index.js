import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";
import "./index.scss";

import { Landing } from "./pages/Landing/Landing";
import { Projects } from "./pages/Projects/Projects";
import { Resume } from './pages/Resume/Resume';

const App = () => {
  // Sets text color for navbar and footer. Dynamic based on route
  const [textColor, setTextColor] = useState("black");

  const globalProps = {
    textColor: textColor,
    setTextColor: setTextColor,
  }

  return (
    <div className="app">
      <Router>
      <Route render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route
              exact
              path="/"
              render={(props) => (
                <Landing
                  {...globalProps}
                  route={""}
                />
              )}
            />
            <Route
              exact
              path="/projects"
              render={(props) => (
                <Projects
                  {...globalProps}
                  route={"projects"}
                />
              )}
            />
            <Route
              exact
              path="/resume"
              render={(props) => (
                <Resume
                  {...globalProps}
                  route={'resume'}
                />
              )}
            />
          </Switch>
        </AnimatePresence>
      )} />
        
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
