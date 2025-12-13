import styled from "styled-components";

export const CARDS = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    
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


`
export const CARD = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 400px;
    text-align: center;
    margin: 0 auto;
    gap: 1rem;
    height: 400px;
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
        flex-wrap: wrap;
        justify-content: space-between;
        color: #d6d6d6;
        font-family: "Spectral SC", serif;

    
    }
    a{
        text-decoration: none;
        font-family: "Spectral SC", sans-serif;
        color: #d6d6d6;
    }
    a:hover{
            color: white;
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
    .card::before {
        content: "";
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        filter: blur(6px);
        opacity: 0.4;
        z-index: 1;
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
