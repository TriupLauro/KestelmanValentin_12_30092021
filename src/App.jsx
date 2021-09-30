import {Component} from "react";
import TopNav from "./components/TopNav";
import VerticalBar from "./components/VerticalBar";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
      return (
          <>
              <TopNav />
              <div className="flex">
                  <VerticalBar />
                  <Dashboard />
              </div>

          </>
      )
  }
}

export default App
