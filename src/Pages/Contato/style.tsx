import styled from "styled-components";

export const ContainerContato = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5rem;
    width: 100%;
    padding: 2rem 4rem;
    margin: 3rem 0;

    @media(max-width: 768px){
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2rem;
    }
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1{
        font-size: 2.2rem;
        font-weight: 600;
        color: #e6e6e6;
    }

    p{
        font-size: 1.6rem;
        color: #e6e6e6;
        font-weight: 400;
    }
    .links{
        display: flex;
        gap: 1rem;
        transition: 0.3s ease-in-out;

        & a:hover{
            transform: rotate(10deg);
        }
    }
`;

export const CardContato = styled.div`
    display: flex;

    .form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    input,
    textarea,
    button {
        width: 80%;
        padding: 1.5rem;
        border: none;
        border-radius: 12px;
        background: linear-gradient(90deg, #0A0F1F, #6b9fff9d);
        color: #e6e6e6;
        font-family: "Spectral SC", serif;
        letter-spacing: 3px;
        
    }

    textarea {
        height: 120px;
        resize: none;
    }

    button {
        cursor: pointer;
        font-size: 1.25rem;
        border-radius: 15px;
    }

    input::placeholder,
    textarea::placeholder{
        color: #e6e6e6;
        font-size: 1rem;
        font-family: "Cinzel Decorative", serif;
        letter-spacing: 0;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    grid-column: 1 / -1;
    justify-self: center;
    margin: 2rem 0;

    button{
        padding: 0.5rem 2rem;
        background: none;
        border: none;
        color: white;
        font-family: "Cinzel Decorative";
        font-size: 2rem;
        cursor: pointer;
    }
`;
