import "./App.css";
import Navbar from "./components/Nav/Navbar.js";

const ulContent =['Welcome','Home','About Us','Contact Us','Sign In','Sign Up']

function App() {
  return (
    <div className="App">
      <Navbar ulContent={ulContent} />
      App
    </div>
  );
}

export default App;
