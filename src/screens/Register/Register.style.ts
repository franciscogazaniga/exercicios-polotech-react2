import styled from "styled-components";

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
`

export const Title = styled.div`
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export const RegisterForm = styled.form`
  width: 400px;
  height: 400px;
  padding: 15px;
  background-color: rgba(255,255,255,0.35);
  border-radius: 8px;
  box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
`

export const LabelRegister = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 28px;
  padding: 15px 0 5px 0;
`

export const InputRegister = styled.input`
  padding: 1rem;
  border: 1px solid #333333;
  border-radius: 0.5rem;
  background: #555555;
  outline: none;

  color: white;
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
`

export const ButtonRegister = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  height: 48px;
  font-size: 24px;
  background-color: #2D59B7;
  color: white;
  cursor: pointer;
  transition: all 0.5s;

  &:hover{
      filter: brightness(120%);
  }
`