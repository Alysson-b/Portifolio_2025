import { useLocation, useNavigate } from "react-router-dom"
import jumpGif from "../img/giphy.gif"
import stopGif from "../img/Hk.Stop.gif"
import loading from "../img/hollow-knight-knight-ezgif.com-rotate.gif"
import { useEffect, useRef, useState } from "react"
import {routes} from "../../src/Pages/Home/home"


type T = "parado" | "correndo" | "atacando"

const router = Object.values(routes)

const Animation = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [posicao, setPosicao] = useState(0)
    const [imgAtiva, setImgAtiva] = useState<T>("parado")
    const [limiteMax, setLimiteMax] = useState(0)
    const personagem = useRef<HTMLImageElement | null>(null)
    const [navegou, setNavegou] = useState(false)


    useEffect(()=>{
        const reloarding = (event: KeyboardEvent)=>{
            if(event.key ===  "Escape"){
                navigate("/")
            }
        }
        window.addEventListener("keydown", reloarding)
        return () => window.removeEventListener("keydown", reloarding)
    },[navigate])

    useEffect(() => {
        const calcularLimite = () => {
            if (!personagem.current) return
            const larguraTela = window.innerWidth
            const larguraDoPersonagem = personagem.current.offsetWidth
            setLimiteMax(larguraTela - larguraDoPersonagem)
        }

        calcularLimite()
        window.addEventListener('resize', calcularLimite)
        return () => window.removeEventListener('resize', calcularLimite)
    }, [])

    useEffect(() => {
        const handlekey = (event: KeyboardEvent) => {
            if (imgAtiva !== "parado") return
            if(event.key === "ArrowRight"){
                setImgAtiva("correndo")
            } else if (event.key === "ArrowLeft"){
                setImgAtiva("atacando")
            }
        }
        window.addEventListener("keydown", handlekey)
        return () => window.removeEventListener("keydown", handlekey)
    }, [imgAtiva])


    useEffect(() => {
        if (imgAtiva !== "correndo") return
        
        const interval = setInterval(() => {
            setPosicao(prev => prev + 15) 
        }, 16)
        
        return () => clearInterval(interval)
    }, [imgAtiva])

    
    useEffect(() => {
        if(imgAtiva === "parado") return
        
        const timer = setTimeout(() => {
            setImgAtiva("parado")
        }, imgAtiva === "correndo" ? 2000 : 1000)

        return () => clearTimeout(timer)
    }, [imgAtiva])

    
    useEffect(() => {
        if (navegou) return
        if (imgAtiva !== "correndo") return
        if (posicao < limiteMax) return

        const rotaAtual = router.findIndex((rota) => rota === location.pathname)
        const proxIndex = rotaAtual === -1 ? 0 : rotaAtual + 1

        if (proxIndex >= router.length) return
        
        setNavegou(true)
        const proxRota = router[proxIndex]
        navigate(proxRota)



    }, [posicao, imgAtiva, limiteMax, navegou, location.pathname, navigate])

    
    useEffect(() => {
        if (imgAtiva === "parado" && navegou) {
            const time = setTimeout(() => {
                setPosicao(0)
                setNavegou(false)
            }, 100)
            return () => clearTimeout(time)
        }
    }, [imgAtiva, navegou])

    
    useEffect(() => {
        if (location.pathname === "/") {
            setPosicao(0)
            setImgAtiva("parado")
            setNavegou(false)
        }
    }, [location.pathname])

    return (
        <div className="imgAnimation">
            <img 
                ref={personagem}
                style={{ left: `${posicao}px` }}
                src={
                    imgAtiva === "correndo" ? loading 
                    : imgAtiva === "atacando" 
                    ? jumpGif 
                    : stopGif
                } 
            />
        </div>
    )
}

export default Animation