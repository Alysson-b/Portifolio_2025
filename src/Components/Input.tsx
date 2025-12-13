import React from "react"


type  inputProps = React.ComponentProps<"input"> & {
    label:string, 
    id:string
}
const Input = ({label, id, ...props}: inputProps) => {

    return(
        <div>
            <label>{label}</label>
            <input type="text" id={label} {...props}/>
        </div>
    )
}

export default Input