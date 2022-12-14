import { FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Background } from "./styles"
import { Input } from '../../components/Input'

export function SignIn() {  
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu Login</h2>

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
        <button>Entrar</button>
        <button>Criar conta</button>
      </Form>

      <Background />
    </Container>
  )
}