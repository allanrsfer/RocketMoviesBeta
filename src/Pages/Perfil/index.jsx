import { FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Input } from "../../components/Input"
import { Back } from '../../components/Back'

import { Container, Form, Avatar } from "./styles"

export function Perfil() {
  return (
    <Container>
      <header>
        <Link to='/'>
          <Back />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img 
            src="https://github.com/allanrsfer.png" 
            alt="Foto do Usuário" 
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input 
              id="avatar"
              type="file" 
            />
          </label>
        </Avatar>
        <Input 
          placeholder = "Nome"
          type = "text"
          icon = {FiUser}
        />
        <Input 
          placeholder = "E-mail"
          type = "text"
          icon = {FiMail}
        />
        <Input 
          placeholder = "Senha Atual"
          type = "Password"
          icon = {FiLock}
        />
        <Input 
          placeholder = "Nova Senha"
          type = "Password"
          icon = {FiLock}
        />

        <button>Salvar</button>
      </Form>


    </Container>
  )
}