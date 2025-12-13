import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiAngular,SiMysql, SiPython, SiBootstrap, SiTailwindcss, SiGithub, SiVite, SiNextdotjs, SiNodedotjs, SiSass} from "react-icons/si";
import { ButtonContainer, CardSkills } from "./style";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";



function  Skills(){
    const navigate = useNavigate()
    return(
        <>
        <h1 className="topText">Minhas habilidades</h1>

            <CardSkills>
                <div className="skills">
                    <SiReact size={50} color="#61DAFB" />
                    <p>React</p>
                </div>

                <div className="skills">
                    <SiTypescript size={50} color="#3178C6" />
                    <p>TypeScript</p>
                </div>

                <div className="skills">
                    <SiJavascript size={50} color="#F7DF1E" />
                    <p>JavaScript</p>
                </div>

                <div className="skills">
                    <SiAngular size={50} color="#DD0031" />
                    <p>Angular</p>
                </div>

                <div className="skills">
                    <SiTailwindcss size={50} color="#38BDF8" />
                    <p>Tailwind</p>
                </div>

                <div className="skills">
                    <SiVite size={50} color="#646CFF" />
                    <p>Vite</p>
                </div>

                <div className="skills">
                    <SiNextdotjs size={50} color="#FFFFFF" />
                    <p>Next.js</p>
                </div>

                <div className="skills">
                    <SiHtml5 size={50} color="#E34F26" />
                    <p>HTML</p>
                </div>

                <div className="skills">
                    <SiCss3 size={50} color="#1572B6" />
                    <p>CSS</p>
                </div>

                <div className="skills">
                    <SiBootstrap size={50} color="#7952B3" />
                    <p>Bootstrap</p>
                </div>

                <div className="skills">
                    <SiSass size={50} color="#CC6699" />
                    <p>Sass</p>
                </div>

                <div className="skills">
                    <SiGithub size={50} color="#FFFFFF" />
                    <p>GitHub</p>
                </div>

                <div className="skills">
                    <SiMysql size={50} color="#4479A1" />
                    <p>MySQL</p>
                </div>

                <div className="skills">
                    <SiPython size={50} color="#3776AB" />
                    <p>Python</p>
                </div>

                <div className="skills">
                    <SiNodedotjs size={50} color="#5FA04E" />
                    <p>Node.js</p>
                </div>
                <ButtonContainer>
                    <Button children={"Voltar"} onClick={()=> navigate("/")}/> 
                </ButtonContainer>
            </CardSkills>
        </>
    )
}
export default Skills