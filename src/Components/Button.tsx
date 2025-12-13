
type buttonProps = React.ComponentProps<"button"> & {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
}

const Button = ({children, onClick, ...props}:  buttonProps) =>{
    return (
        <>
            <button onClick={onClick}>{children}</button>
        </>
    )
}

export default Button