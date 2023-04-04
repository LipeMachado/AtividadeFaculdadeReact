import { ArrowRight } from "phosphor-react";
import {
    HeaderContainerDiv,
    HeaderContentDiv,
    HeaderButtonDiv,
    HeaderImageDiv
} from "./style";

import ImageCardsHeader from '../../Assets/HomePage/ImageCardsHeader.svg'

export function Header() {
    return (
        <>
            <HeaderContainerDiv>
                <HeaderContentDiv>
                    <h6>Welcome! Future Platform</h6>
                    <h1>The World's Most Modern Card <span>Platform</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                    <HeaderButtonDiv>
                        <span>
                            Get Started
                            <ArrowRight size={20} />
                        </span>
                    </HeaderButtonDiv>
                </HeaderContentDiv>
                <HeaderImageDiv>
                    <img src={ImageCardsHeader} />
                </HeaderImageDiv>
            </HeaderContainerDiv >
        </>
    )
}