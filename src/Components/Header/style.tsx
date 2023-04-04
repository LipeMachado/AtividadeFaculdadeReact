import styled from "styled-components";

export const HeaderContainerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderContentDiv = styled.div`
    max-width: 563px;

    h6 {
        color: #CBFC01;
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 5px;
    }

    h1 {
        font-weight: 700;
        font-size: 70px;
        color: #ffffff;
        line-height: 90px;
        margin-bottom: 5px;

        span {
            color: #CBFC01;
        }

        @media only screen and (max-width: 900px){
            font-size: 40px;
            line-height: 50px;

            @media only screen and (max-width: 500px){
                font-size: 30px;
            }
        }
    }

    p {
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 25px;

        @media only screen and (max-width: 900px){
            font-size: 14px;
        }
    }

    @media only screen and (max-width: 1150px){
        max-width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const HeaderButtonDiv = styled.div`
    display: flex;

    span {
        display: flex;
        cursor: pointer;
        gap: 5px;
        align-items: center;
        background-color: #CBFC01;
        padding: 15px 35px;
        color: #151515;

        &:hover {
            svg {
                transform: translateX(5px);
            }
        }
    }
`;

export const HeaderImageDiv = styled.div`
    position: absolute;
    right: 0;
    bottom: 5%;
    
    img {
        width: 30rem;
        height: 30rem;
    
        @media only screen and (min-width: 1250px){
            width: 35rem;
            height: 35rem;
        }
    }

    @media only screen and (max-width: 1150px){
        display: none;
    }
`;