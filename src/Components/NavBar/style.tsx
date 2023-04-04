import styled from "styled-components";

export const NavBarContainerDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    position: absolute;
    width: 100%;
`;

export const NavBarContainerLogoDiv = styled.div`
    h1 {
        color: #ffffff;
        font-size: 24px;;
        font-weitght: 400;
    }
`;

export const NavBarContainerItensDiv = styled.div`
    ul {
        display: flex;
        gap: 10px;

        li {
            list-style-type: none;
            padding: 10px 20px;
            color: #ffffff;
            font-size: 16px;;
            font-weitght: 400;
            cursor: pointer;

            &:hover {
                background: #CBFC01;
                color: #151515;
            }
        }
    }

    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

export const NavBarContainerLoginDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    cursor: pointer;

    p {
        font-size: 16px;
        font-weitght: 400;
        color: #ffffff;
    }

    svg {
        color: #ffffff;
    }

    &:hover {
        background: #CBFC01;

        p {
            color: #151515;
        }

        svg {
            transform: translateX(5px);
            color: #151515;
        }
    }

    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

export const NavBarContainerMenuDiv = styled.div`
    display: none;

    @media only screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`;