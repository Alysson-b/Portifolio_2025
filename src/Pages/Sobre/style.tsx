import styled from "styled-components";


export const ContainerSobre = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
    width: 100%;
    padding: 2rem 4rem;
    margin: 3rem  0;
    
    

`

export const CardSobre = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    
    img{
        width: 80%;
        height: auto;
        border-radius: 35% 15% 35% 15%;
        box-shadow:
        0 0 25px rgba(180, 200, 255, 0.4),
        0 0 60px rgba(40, 80, 255, 0.25),
        inset 0 0 20px rgba(120, 160, 255, 0.12),
        inset 0 0 40px rgba(40, 80, 255, 0.08);
        backdrop-filter: blur(6px);
        transition: 0.3s ease;
        animation: float 2s ease-in-out infinite;

        &:hover {
            transform: translateY(-4px);
            box-shadow:
            0 0 40px rgba(180, 200, 255, 0.6),
            0 0 80px rgba(40, 80, 255, 0.4),
            inset 0 0 30px rgba(120, 160, 255, 0.15);
        }
    }
    

`
export const SobreInfo = styled.div`

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    background-color: black;
    border-radius: 12px;
    color: aliceblue;
    box-shadow:
        0 0 25px rgba(180, 200, 255, 0.4),
        0 0 60px rgba(40, 80, 255, 0.25),
        inset 0 0 20px rgba(120, 160, 255, 0.12),
        inset 0 0 40px rgba(40, 80, 255, 0.08);
        backdrop-filter: blur(6px);
        transition: 0.3s ease;

        &:hover {
            box-shadow:
            0 0 40px rgba(180, 200, 255, 0.6),
            0 0 80px rgba(40, 80, 255, 0.4),
            inset 0 0 30px rgba(120, 160, 255, 0.15);
        }

    h1{
        font-size: 2.5rem;
        font-weight: 900;
        
    }
    p{
        font-family: "Cinzel Decorative";
        font-size: 1.25rem;
        font-weight: 600;
        padding: 2rem;
        line-height: 2em;
        
    }
    .links{
        display: flex;
        align-items: center;
        padding:  0 2rem;
        gap: 1rem;

        & a:hover{
            transform: rotate(10deg);
        }
    }

    @keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-8px); 
    }
    100% {
        transform: translateY(0);
}
}
`
export const ButtonContainer = styled.div`
    display: flex;
    grid-column: 1 / -1;
    justify-self: center;
    align-items: center;
    margin: 2rem 0; 
    

    

    button{
        padding:  0.5rem 2rem;
        margin: 0;
        background: none;
        border: none;
        color: white;
        font-family: "Cinzel Decorative";
        font-size: 2rem;
        cursor: pointer;
    
    }
`