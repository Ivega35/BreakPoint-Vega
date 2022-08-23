import react from "react";
import "./style.css";

import NavBar from "./components/navBar"
class App extends react.Component{
  render(){
    return (
      <div className="App">
        <NavBar/>
        <h1>Break Point</h1>
        <h2>Paddel store</h2>
      </div>
    )
  }
}
export default App;