import "./App.css";
import Main from "./home/main/main/Main";
import Navbar from "./home/navigation/navbar/Navbar";
import Sidebar from "./home/navigation/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <Navbar />
        <Main />
      </div>
      <div className="Sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
