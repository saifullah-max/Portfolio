import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Routes, Route, Switch } from "react-router-dom";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import Project from "./components/projects/Project";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
