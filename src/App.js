import { Routes } from "react-router-dom";
import Navbar from "./components/NavbarMenu";
import { Home } from "./views/Home";
import { useState } from "react";

function App() {
const [isMenuActive, setIsActive] = useState(false);

const handleActive = () => setIsActive(!isMenuActive);

  const scroll =(to)=>{
    document.getElementById(to).scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsActive(!isMenuActive);
  }
  return (
    <>
      <Navbar scroll={scroll} handleActive={handleActive} isMenuActive={isMenuActive}/>
      <Home/>
      <Routes>
        {/* <Route></Route> */}
        </Routes>
    </>
  );
}

export default App;
