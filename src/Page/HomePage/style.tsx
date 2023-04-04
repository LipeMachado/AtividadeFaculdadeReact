import styled from "styled-components";
import BackgroundHeader from '../../Assets/HomePage/BackgroundHeader.png'

export const NavBarContainerSection = styled.section`
    background: transparent;
    position: relative;
    z-index: 999;
`;

export const HeaderContainerSection = styled.section`
    height: 100vh;
    background-image: url(${BackgroundHeader});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    padding: 0 3rem;
`;