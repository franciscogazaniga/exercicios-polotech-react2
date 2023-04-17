import Logo from "../../assets/logo.png"
import { HeaderContainer, LogoImage } from "./Header.styles";

export function Header() {
  return(
    <HeaderContainer>
      <LogoImage src={Logo} alt="To-Do App Logotipo"/>
    </HeaderContainer>
  )
}