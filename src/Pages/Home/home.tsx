import { useEffect, useState } from "react";
import hollow from "../../img/hollow.png"
import up from "../../img/iconUp.png"
import down from "../../img/iconDown.png"

import { Headers, NavLink } from "./styled";
import { useNavigate } from "react-router-dom";


export const routes: Record<string,string> = {
    "Projetos": "/projetos",
    "Skills": "/skills",
    "Sobre Mim": "/sobre",
    "Contato": "/contato"
}

function Home(){
    
    const [selectItem, setSelectItem] = useState("Projetos")
    const items = ["Projetos", "Skills", "Sobre Mim", "Contato"]
    const navigation = useNavigate()


    useEffect(() =>{
        const handleSelect = (event: KeyboardEvent) =>{
            const index = items.indexOf(selectItem)

            if(event.key === "ArrowDown"){
                
                const next =(index + 1) % items.length
                setSelectItem(items[next])

            }else if (event.key === "ArrowUp"){
                const prev =(index - 1 + items.length) % items.length
                setSelectItem(items[prev])
            }
        }

        window.addEventListener("keydown", handleSelect)

        return() =>{
            window.removeEventListener("keydown", handleSelect)

        }
    },[selectItem, items])
    
    
    return(
        <Headers>
            <div className="inicio" >
                <img className="iconUp"  src={up} alt="" />
                    <h1>Portfólio</h1>
                    <h2>Alisson Barbosa</h2>
                <img className="iconDown"  src={down} alt="" />
                
            </div>

            
            <NavLink>
                <div className="links">
                    <ul > 
                        
                        {items && 
                            items.map((item) =>(
                            <li onMouseMove={()=> setSelectItem(item)} onClick={() => navigation(routes[item])} id="icone" key={item}> {item === selectItem && (<img src={hollow} alt="" />)} <span>{item}</span> </li>))}
                    </ul>
                        </div>
            </NavLink>
            
        </Headers> 
    )
}


export default Home