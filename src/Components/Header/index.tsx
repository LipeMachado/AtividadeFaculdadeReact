import { ArrowRight } from "phosphor-react";
import {
    HeaderContainerDiv,
    HeaderContentDiv,
    HeaderImageDiv
} from "./style";

import ImageCardsHeader from '../../Assets/HomePage/ImageCardsHeader.svg'

export function Header() {
    return (
        <>
            <HeaderContainerDiv>
                <HeaderContentDiv>
                    <h6>Welcome! Future Platform</h6>
                    <h1>The World's Most Modern Card Platform</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                    <a>
                        <span>Get Started</span>
                        <ArrowRight size={32} />
                    </a>
                </HeaderContentDiv>
                <HeaderImageDiv>
                    <img src={ImageCardsHeader} />
                </HeaderImageDiv>
            </HeaderContainerDiv>
        </>
    )
}