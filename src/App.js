import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarMenu";
import { Home } from "./views/Home";

function App() {
  const scroll =(to)=>{
    console.log(to);
    document.getElementById(to).scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <>
      <Navbar scroll={scroll}/>
      <Home/>
      <Routes>
        {/* <Route></Route> */}
        </Routes>
    </>
  );
}

export default App;
