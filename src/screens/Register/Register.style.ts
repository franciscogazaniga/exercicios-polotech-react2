import styled from "styled-components";

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 30rem;
`

export const Title = styled.div`
  color: white;
  font-size: 1.5rem;
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
  width: 100%;
  height: 36px;
  border: none;
  border-radius: 8px;
  padding-left: 15px;
  font-size: 16px;
  color: #484848;
`

export const ButtonRegister = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  height: 48px;
  font-size: 24px;
  background-color: gold;
  color: #242424;
  cursor: pointer;
`