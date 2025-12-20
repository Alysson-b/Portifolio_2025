import { useEffect, useState } from "react"


export type T = "up"|  "left" | "right" | "down" | null

const Dpad =()=>{

    const [active , setActive] = useState<T>(null)

    useEffect(() =>{
                const handlePad = (event: KeyboardEvent) =>{
                    
                    if(event.key === "ArrowUp"){
                        setActive("up")
                    }else if (event.key === "ArrowLeft"){
                        setActive("left")
                    }else if (event.key === "ArrowDown"){
                        setActive("down")
                    } else if (event.key === "ArrowRight"){
                        setActive("right")
                    }
                    setTimeout(()=> setActive(null), 100)

                }
                window.addEventListener("keydown", handlePad)
        
                return() =>{ window.removeEventListener("keydown", handlePad)
                }
            },[])

    
    
    return(

        <div className="dpad">
            <button className={`up ${active === "up" ? "active": ""}`}>▲</button>
            <button className={`left ${active === "left" ? "active": ""}`}>◀</button>
            <i className="center"></i>
            <button className={`right ${active === "right" ? "active" : ""}`}>▶</button>
            <button className={`down ${active === "down" ? "active" : ""}`}>▼</button>
        </div>

    )
}

export default Dpad