import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

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
        background-color: #fcfcff;
        position: absolute;
        top: 100%;
        margin: 0.5rem 0;
        transition: .5s ease-in-out;
        
        }
        .links li{
        cursor: pointer;
        transition: 0.3s ease-in-out;
        }
        .links li:hover::before{
            width: 100%;
        
}
    
`