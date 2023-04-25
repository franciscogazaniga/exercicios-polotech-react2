import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonRegister, InputRegister, LabelRegister, RegisterContainer, RegisterForm, Title } from "./Register.style";
import { IRegister, IUser } from "./Register.type";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export function Register({ onSubmit }: IRegister) {
  const[formData, setFormData] = useState<IUser>({
    name: '',
    email: '',
    age: ''
  })

  const navigate = useNavigate()

  function validateName(name: string) {
    if(name.trim().length < 3){
      return 'O campo nome deve ter no mínimo 3 caracteres.'
    }
  }

  function validateEmail(email: string) {
    const emailRegex = /\S+@\S+\.\S+/
    if(!emailRegex.test(email)){
      return 'O e-mail deve ser válido.'
    }
  }

  function validateAge(age: string) {
    const ageNumber = Number(age)
    if(isNaN(ageNumber)){
      return 'O campo idade aceita somente valor númerico.'
    } else if(ageNumber < 18) {
      return 'Você precisa ser maior de 18 anos para entrar.'
    }
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value})
  }

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const ageError = validateAge(formData.age)
    const toastPosition = toast.POSITION.TOP_RIGHT

    function toastError(error: string) {
      toast.error(error, {
        position: toastPosition
      })
    }

    if(nameError) {
      toastError(nameError)
      return
    }

    if(emailError) {
      toastError(emailError)
      return
    }

    if(ageError) {
      toastError(ageError)
      return
    }

    console.log(formData);
    navigate("/listview");
  }

  return(
    <RegisterContainer>
      <Title>ToDo List</Title>

      <RegisterForm onSubmit={handleOnSubmit}>
        <LabelRegister>Nome:</LabelRegister>
        <InputRegister type="text" name="name" value={formData.name} onChange={handleOnChange}></InputRegister>

        <LabelRegister>E-mail:</LabelRegister>
        <InputRegister type="text" name="email" value={formData.email} onChange={handleOnChange}></InputRegister>

        <LabelRegister>Idade:</LabelRegister>
        <InputRegister type="text" name="age" value={formData.age} onChange={handleOnChange}></InputRegister>

        <ButtonRegister type="submit">Entrar</ButtonRegister>
        <ToastContainer />
      </RegisterForm>
    </RegisterContainer>
  )
}