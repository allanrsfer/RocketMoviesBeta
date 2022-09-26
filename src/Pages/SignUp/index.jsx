import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Container, Form, Background } from "./styles"
import { Input } from '../../components/Input'

export function SignUp() {  
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

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
          placeholder = "Senha"
          type = "text"
          icon = {FiLock}
        />
        <button>Cadastrar</button>
        <button> <FiArrowLeft/> Voltar para o Login</button>
      </Form>

      <Background />
    </Container>
  )
}