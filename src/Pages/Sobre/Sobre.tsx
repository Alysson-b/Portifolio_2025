import { useNavigate } from "react-router-dom"
import Button from "../../Components/Button"
import perfil from "../../img/perfil.jpeg"
import { ButtonContainer, CardSobre, ContainerSobre, SobreInfo } from "./style"
import { SiGithub, SiLinkedin, SiInstagram} from "react-icons/si"







function SobreMin(){

    const navigate = useNavigate()
    
    return(
        
        <>
            <ContainerSobre>

                <CardSobre>
                    <img src={perfil} alt="foto de perfil" />

                
                </CardSobre>

                <SobreInfo>
                    <h1>Sobre mim</h1>
                    <p>Olá! Eu sou o Alisson, desenvolvedor Front-end júnior apaixonado por criar interfaces modernas e funcionais. 
                        Entrei na área de TI no início de 2024 e desde então venho me dedicando intensamente ao estudo e prática de tecnologias como HTML, CSS, JavaScript, React e TypeScript.
                        Sou movido por desafios e pela vontade de evoluir constantemente. 
                        Como gamer e entusiasta de tecnologia, encontrei na programação a forma de transformar ideias em experiências e construir soluções reais.
                        Meu foco hoje é me aperfeiçoar em front-end e contribuir de forma sólida em projetos e equipes, 
                        sempre buscando entregar código limpo, desempenho e boas práticas.
                    </p>

                    <div className="links">

                        <a href="https://github.com/Alysson-b" target="_blank">
                        <SiGithub size={30} color="#ffffff" />
                        </a>

                        <a href="https://www.linkedin.com/in/alisson-barbosa09/" target="_blank">
                        <SiLinkedin size={30} color="#0A66C2" />
                        </a>

                        <a href="https://www.instagram.com/alysson_barbosa_r/" target="_blank">
                        <SiInstagram size={30} color="#E4405F" />
                        </a>

                    </div>
                    
                </SobreInfo>

                <ButtonContainer>
                    <Button children={"Voltar"} onClick={()=> navigate("/")}/> 
                </ButtonContainer>
            </ContainerSobre>
        
        </>
    )
}
export default SobreMin