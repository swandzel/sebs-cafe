import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Onas from "./Onas";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/onas" component={Onas} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
