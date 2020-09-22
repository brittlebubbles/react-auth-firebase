import React, { useContext } from "react";
import { firebaseAuth } from "./provider/AuthProvider";
import { Route, Switch, Redirect } from "react-router-dom";
import "./styles/tailwind.css";

//Import Pages
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App() {
  const { token } = useContext(firebaseAuth);
  console.log(token);

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
          render={(rProps) => (token === null ? <Login /> : <Home />)}
        />

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
