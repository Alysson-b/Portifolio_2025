
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"
import Button from "../../Components/Button"
import Input from "../../Components/Input"
import { ButtonContainer, CardContato, CardInfo, ContainerContato } from "./style"
import { useNavigate } from "react-router-dom"
import { useState} from "react"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"







function Contato(){
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [carregando, setCarreando] = useState(false)
    const navigate = useNavigate()
    
    function handeForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(nome === "" || email === "" ||  message === ""){
            toast("Preencha todos os campos")
            return
        }

        if (!email.includes("@")) {
            toast.error("E-mail inválido")
            return
        }
        const templateParams = {
            name: nome,
            message: message,
            email: email
        }
        setCarreando(true)
        emailjs.send("service_gr428kg", "template_fj03c51", templateParams,"4pQ4zTBQYH9TM3kGe")
        .then(() =>{
            toast.success("Email enviado com sucesso! 📧")
            setNome("")
            setEmail("")
            setMessage("")
        
        }).catch(()=>{
            toast.error("Erro ao enviar email 😢")
        })
        .finally(()=> setCarreando(false))

    }









    return(
        <>
            <h1 className="topText">Meus contatos</h1>
            <ContainerContato>
                <CardInfo>
                    <h1>Vamos trabalhar juntos?</h1>
                    <p>Fale comigo pelos campos ao lado ou pelas redes sociais. Estou pronto para criar algo incrível com você.</p>

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
                </CardInfo>

                <CardContato>
                    <form className="form" onSubmit={handeForm}>
                        <Input onChange={(e)=> setNome(e.target.value)} value={nome} id="nome" label="" type="text" placeholder="Seu Nome"/>
                        <Input onChange={(e)=> setEmail(e.target.value)} value={email} id="email" label="" type="email" placeholder="Seu E-mail"/>
                        <textarea onChange={(e)=> setMessage(e.target.value)} value={message} name="areas" id="area" placeholder="Sua mensagem"></textarea>
                        <Button disabled={carregando}  children={ carregando ? "Envaindo..." : "Enviar"} type="submit"/>
                    </form>
                </CardContato>

                <ButtonContainer>
                    <Button children={"Voltar"} onClick={() => navigate("/") }/> 
                </ButtonContainer>
                
            </ContainerContato>
        </>
    )
}

export default Contato