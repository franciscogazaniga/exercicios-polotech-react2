import Logo from "assets/logo.png"
import { useRef } from "react";
import { ButtonChangeTheme, HeaderContainer, LogoImage } from "./Header.styles";


export function Header() {
  const divRef = useRef<HTMLDivElement | null>(null)
  const colors = useRef(["#666", "#444"])
  const currentIndex = useRef(0)

  function handleChangeTheme() {
    const divElement = divRef.current;
    const colorsList = colors.current;

    if(divElement && colorsList && colorsList.length > 0){
      divElement.style.backgroundColor = colorsList[currentIndex.current]
      currentIndex.current = currentIndex.current === 0 ? 1 : 0;
    }
  }

  return(
    <HeaderContainer ref={divRef}>
      <ButtonChangeTheme onClick={handleChangeTheme}>
        <LogoImage src={Logo} alt="To-Do App Logotipo"/>
      </ButtonChangeTheme>
    </HeaderContainer>
  )
}