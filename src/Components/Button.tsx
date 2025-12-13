
type buttonProps = React.ComponentProps<"button"> & {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
}

const Button = ({children, onClick, ...props}:  buttonProps) =>{
    return (
        <>
            <button {...props} onClick={onClick}>{children}</button>
        </>
    )
}

export default Button