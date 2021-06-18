import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Onas from "./Onas";
import Home from "./Home";
import Naszemenu from "./Naszemenu";
import Zarezerwujstolik from "./Zarezerwujstolik";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/onas" component={Onas} />
          <Route path="/naszemenu" component={Naszemenu} />
          <Route path="/zarezerwujstolik" component={Zarezerwujstolik} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
