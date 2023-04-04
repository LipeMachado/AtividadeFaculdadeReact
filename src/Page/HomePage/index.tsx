import { Header } from "../../Components/Header";
import { NavBar } from "../../Components/NavBar";
import {
    NavBarContainerSection,
    HeaderContainerSection
} from "./style";

export function HomePage() {
    return (
        <>
            <NavBarContainerSection>
                <NavBar />
            </NavBarContainerSection>
            <HeaderContainerSection>
                <Header />
            </HeaderContainerSection >
        </>
    )
}