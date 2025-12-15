import { useEffect } from "react"
import { useLocation } from "react-router-dom"



const Background = () =>{
    const location = useLocation()

    useEffect(() => {
        const classes = [
            "bg-home",
            "bg-projetos",
            "bg-skills",
            "bg-sobre",
            "bg-contato"
        ]

    document.body.classList.remove(...classes)

        const rota =
            location.pathname === "/" ? "home" : location.pathname.replace("/", "")

        document.body.classList.add(`bg-${rota}`)
    }, [location.pathname])


    return null
}

export default Background