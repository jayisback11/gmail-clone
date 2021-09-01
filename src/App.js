import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Center from "./components/Center";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./components/Mail";
import SendForm from "./components/SendForm";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";

function App() {
  const openMailForm = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__container">
            {/* sidebar */}
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <Center />
              </Route>
            </Switch>
          </div>
          {openMailForm && <SendForm />}
        </div>
      )}
    </Router>
  );
}

export default App;
