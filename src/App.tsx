import "./App.css"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Contato from "./Pages/Contato/Contato"
import { Container } from "./Pages/Home/styled"
import Projects from "./Pages/Projects/project"
import Skills from "./Pages/Skills/Skills"
import SobreMin from "./Pages/Sobre/Sobre"
import Home from "./Pages/Home/home"
import Animation from "./Components/animations"
import Dpad from "./Components/dPad"
import Background from "./Components/Backgound"
import { ToastContainer } from "react-toastify"
import "react-toastify"







function App() {

    
  return (
    <>
        <BrowserRouter>
          <Container>
            <ToastContainer position="top-right" theme="dark" />
            <Animation/>  
            <Dpad/>
            <Background/>
                  {[...Array(20)].map((_, i) => (<div key={i} className="float-particles" style={{left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,animationDelay: `${Math.random() * 5}s`,animationDuration: `${8 + Math.random() * 4}s`,}}
                />
                ))}
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/projetos" element={<Projects/>} />
                    <Route path="/skills" element={<Skills/>} />
                    <Route path="/sobre" element={<SobreMin/>} />
                    <Route path="/contato" element={<Contato/>} />
                </Routes>
          </Container>
        </BrowserRouter>
    </>

      
  )
}

export default App
