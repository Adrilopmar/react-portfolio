import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarMenu";
import { Home } from "./views/Home";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Routes>
        {/* <Route></Route> */}
        </Routes>
    </>
  );
}

export default App;
