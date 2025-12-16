import styled from "styled-components";

export const CARDS = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
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


`
export const CARD = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: 0 auto;
    width: 400px;
    min-height: 350px;
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid rgba(200, 220, 255, 0.15);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    
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
    }

    p {
        display: flex;
        align-items: center;
        gap: 5rem;
        flex-wrap: wrap;
        color: #d6d6d6;
        font-family: "Spectral SC", serif;

    
    }
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #00000060;
        font-weight: 700;
        font-size: 0.7rem;
        font-family: "Cinzel Decorative", sans-serif;
        
    }
    a:hover{
            color: #000000eb;
            text-shadow:
                0 0 12px rgba(255, 255, 255, 1),
                0 0 35px rgba(255, 255, 255, 0.8),
                0 0 70px rgba(255, 255, 255, 0.4);
    }


    .name {
        font-size: 1.3rem;
        font-weight: 600;
        letter-spacing: 1px;
        text-shadow: 0 0 8px rgba(180, 200, 255, 0.4);
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(90deg, #c9e1f8, #6B9FFF);
        filter: blur(3 1);
        border: none;
        padding: 6px;
        width: 50%;
        cursor: pointer;
        border-radius: 15px;
    }




`;

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
