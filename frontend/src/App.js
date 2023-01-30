import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./container/Header";
import { BrowserRouter } from "react-router-dom";
import About from "./container/About";
import Work from "./container/Work";
import Skills from "./container/Skills";
import Contact from "./container/Contact";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
