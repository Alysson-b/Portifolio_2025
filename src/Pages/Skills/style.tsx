import styled from "styled-components";


export const CardSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    width: 100%;
    padding: 2rem 4rem;
    margin: 3rem  0;
    
    
    
    @media (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }


    .skills{
        width: 200px;
        text-align: center;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 2rem;
        gap: 1rem;
        background: linear-gradient(90deg, #0A0F1F , #1E2A44 , #1E2A44);
        color: #E6E6E6;
        border-radius: 20px;
        border: 1px solid rgba(200, 220, 255, 0.15);
        box-shadow:
        0 0 25px rgba(180, 200, 255, 0.4),
        0 0 60px rgba(40, 80, 255, 0.25),
        inset 0 0 20px rgba(120, 160, 255, 0.12),
        inset 0 0 40px rgba(40, 80, 255, 0.08);
        backdrop-filter: blur(6px);
        transition: 0.3s ease;

        &:hover {
        transform: translateY(-4px);
        box-shadow:
        0 0 40px rgba(180, 200, 255, 0.6),
        0 0 80px rgba(40, 80, 255, 0.4),
        inset 0 0 30px rgba(120, 160, 255, 0.15);
        transform: rotate(10deg);

    }
    p{
        font-family: "Cinzel", sans-serif;
        font-weight: 700;
        font-size: 1.25rem;
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