import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";
import "./index.scss";

import { Landing } from "./pages/Landing/Landing";
import { Projects } from "./pages/Projects/Projects";

const App = () => {
  // Sets text color for navbar and footer. Dynamic based on route
  const [textColor, setTextColor] = useState("black");

  return (
    <div className="app">
      <Router>
      <Route render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route
              exact
              path="/"
              render={(props) => (
                <Landing
                  {...props}
                  textColor={textColor}
                  setTextColor={setTextColor}
                  route={""}
                />
              )}
            />
            <Route
              exact
              path="/projects"
              render={(props) => (
                <Projects
                  {...props}
                  textColor={textColor}
                  setTextColor={setTextColor}
                  route={"projects"}
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
