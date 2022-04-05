import "./App.css";
import Nav from "./components/nav";
import LeftSidebar from "./components/leftSidebar";
import RightSidebar from "./components/rightSidebar";
function App() {
  console.log("hello");
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <LeftSidebar />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
