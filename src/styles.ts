import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
      box-sizing: border-box
   }

   body {
      background: #303030;
      color: #fff; 
   }

   body, input {
      font-family: 'Roboto', sans-serif;
   } 

`;

export const AppLayoutContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 3 rem;
   min-height: 100vh;
   margin-top: 100px;
`;

export const globalColorsObject = {
   primaryColor: '#FFC93f'
}