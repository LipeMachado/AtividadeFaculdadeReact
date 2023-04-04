import {
    NavBarContainerDiv,
    NavBarContainerLogoDiv,
    NavBarContainerItensDiv,
    NavBarContainerLoginDiv,
    NavBarContainerMenuDiv
} from './style'
import { ArrowRight, List } from 'phosphor-react';

export interface NavBarProps {
    logo: string;
}

export function NavBar() {
    return (
        <>
            <NavBarContainerDiv>
                <NavBarContainerLogoDiv>
                    <h1>FinanceX</h1>
                </NavBarContainerLogoDiv>
                <NavBarContainerItensDiv>
                    <ul>
                        <li>Why FinanceX</li>
                        <li>Features</li>
                        <li>Update</li>
                        <li>Blog</li>
                    </ul>
                </NavBarContainerItensDiv>
                <NavBarContainerLoginDiv>
                    <p>Sign Up</p>
                    <ArrowRight size={20} />
                </NavBarContainerLoginDiv>
                <NavBarContainerMenuDiv>
                    <List size={32} />
                </NavBarContainerMenuDiv>
            </NavBarContainerDiv>
        </>
    )
}