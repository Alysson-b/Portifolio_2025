import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;


    .Toastify__toast {
    background: linear-gradient(90deg, rgba(10, 15, 31, 0.9) , rgba(30, 42, 68, 0.8) , rgba(30, 42, 68, 0.7));
    color: #fff;
    font-family: "Cinzel Decorative";
    font-size: 0.9rem;
    font-weight: 300;
    border-left: 4px solid rgb(160, 108, 255);
    }



`
export const Headers = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 100vh;

    .inicio{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 0.25rem ;
        .iconUp{
            margin-right: 1rem;
        }
        .iconDown{
            width: 60%;
        }
    }
    

    h1{
    font-size: 8rem;
    font-weight: 400;
    color: #fff;
    text-shadow:
        0 0 12px rgba(255, 255, 255, 1),
        0 0 35px rgba(255, 255, 255, 0.8),
        0 0 70px rgba(255, 255, 255, 0.4);

}
h2{
    
    font-size: 3rem;
    font-weight: 300;
    color: #fff;
    margin-top: -10px;

    text-shadow:
        0 0 10px rgba(255,255,255,.9),
        0 0 25px rgba(255,255,255,.5);

}


@media (max-width: 1400px) {
        h1{
            font-size: 6rem;

        }
        h2{
            font-size: 2rem;
        }
    }
    @media (max-width: 1000px) {
        h1{
            font-size: 4rem;
        }
        h2{
            font-size: 1rem;
        }
    }
    @media (max-width: 400px) {
        h1{
            font-size: 2rem;
        }
        h2{
            font-size: 0.5rem;
        }
    }


`
export const NavLink = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    .links{
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    
    
    
    .links ul{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1.8rem;
        list-style: none;
        font-family: "Cinzel", serif;
        font-size: 2rem;
        font-weight: 300;
        color: #fff;
    }

    .links li{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        letter-spacing: 0;
        position: relative;
        transition: all 0.3s;

        
        img{
            margin: 0;
            width: 30px;
            position: absolute;
            left: -35px;
            top: 2px;
        }
    }
    .links li::before{
        content: "";
        width: 0px;
        height: 3px;
        border-radius: 50%;
        background-color: none;
        position: absolute;
        top: 100%;
        margin: 0.5rem 0;
        transition: .3s ease-in-out;
        
        }
        .links li{
        cursor: pointer;
        transition: 0.3s ease-in-out;
        }
        .links li:hover::before{
            background-color: #e6e6e6;
            width: 90%;
        
}
    
`