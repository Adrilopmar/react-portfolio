import { Routes,Route, useNavigate } from "react-router-dom";
import Navbar from "./components/NavbarMenu";
import { Home } from "./views/Home";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { SingleProjectDetails } from "./views/SingleProjectDetails";
import { getProjects } from "./services/config.projects";
import { infoProject } from './data/infoProjects'

function App() {
const [isMenuActive, setIsActive] = useState(false);
const navigate = useNavigate()
const [projectList, setProjectList] = useState(infoProject)

useEffect(()=>{
  // getAllProjects()
},[])

// const getAllProjects =async ()=>{
//   setProjectList(await getProjects())
// }

const handleActive = () => setIsActive(!isMenuActive);


  const scroll =(to)=>{
    navigate('/')
    setTimeout(()=>{
      document.getElementById(to).scrollIntoView({ behavior: 'smooth', block: 'start' })
    },100)
    
    setIsActive(!isMenuActive);
  }
  return (
    <>
      <Navbar scroll={scroll} handleActive={handleActive} isMenuActive={isMenuActive}/>
      <Routes>
        <Route path="/" element={<Home projectList={projectList}/>}/>
        <Route path="/:projectName" element={<SingleProjectDetails projectList={projectList}/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
