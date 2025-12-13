import React, { useEffect, useState } from "react";
import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiVuedotjs, SiReact, SiAngular} from "react-icons/si";
import { ButtonContainer, CARD, CARDS } from "./styled";
import img1 from "../../img/card1.png"
import img2 from "../../img/card2.png"
import img3 from "../../img/card3.png"
import img4 from "../../img/card4.png"
import img5 from "../../img/card5.png"
import img6 from "../../img/card6.png"
import img7 from "../../img/card7.png"
import img8 from "../../img/card8.png"
import img9 from "../../img/card9.png"
import img10 from "../../img/card10.png"
import img11 from "../../img/card11.png"
import img12 from "../../img/card12.png"
import img13 from "../../img/card13.png"
import img14 from "../../img/card14.png"
import loadingGif from "../../img/loading.gif"
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";


export const mapIcons: Record<string, React.ElementType> = {
    "JavaScript": SiJavascript,
    "CSS": SiCss3,
    "TypeScript": SiTypescript,
    "React": SiReact,
    "HTML": SiHtml5,
    "Angular": SiAngular,
    "Vue": SiVuedotjs
}
const mapColors: Record<string, string> = {
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    CSS: "#1572B6",
    HTML: "#E34F26",
    React: "#61DAFB",
    Vue: "#41B883",
    Angular: "#DD0031",
};


interface Dados{
    id: number;
    full_name: string;
    name: string
    private: boolean;
    homepage: string
    description: string;
    language: string;
}



function Projects(){
    
    const image = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14]
    const [loading, setLoading] = useState(true)
    
    const [data, setData] = useState<Dados[]>([])
    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{

            async function buscarDados(){
                try{
                    
                    
                    const response = await fetch(`https://api.github.com/users/alysson-b/repos?sort=created&direction=desc&per_page=14`)
                    
                    if(!response.ok){
                        throw new Error('Error na requisição: ' + response.status)
                    }
                    
                    const data  =  await response.json()
                    setData(data)
                    
                }catch(error){
                    console.log("error")
                }finally{
                    setLoading(false)
            }
            
        }
        
        buscarDados()
        }, 1500)
    },[])

    if(loading){
        return(
            <div className="loading">
                <div className="loading-content">
                    <img src={loadingGif} alt="Carregando" />
                    <p className="loading-text">
                    Carregando<span className="dots"></span>
                    </p>
                </div>
            </div>
        )
    }

    return (
    <>
        <h1 className="topText">Meus Projetos</h1>
        <CARDS>
                {data.map((dados, index) =>( 
                    <CARD key={dados.id}  style={{backgroundImage: `url(${image[index]})`}}>
                    <p><span className="name">{dados.name}</span> 

                    {(() =>{
                        const iconColor = mapColors[dados.language]
                        const Icon= mapIcons[dados.language];
                        return Icon ? <Icon color={iconColor} size={"22px"} /> : <span>{dados.language}</span>;
                    })()}</p>
                    
                    <a target="_blank" href={dados.homepage}>{dados.homepage.replace("https://", "")}</a>
                    
                    </CARD>
                ))}

                <ButtonContainer>
                    <Button children={"Voltar"} onClick={()=> navigate("/")}/> 
                </ButtonContainer>
        </CARDS>
    </>
    )
}


export default Projects