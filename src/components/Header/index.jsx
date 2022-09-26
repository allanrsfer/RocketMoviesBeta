import { Container, Profile } from './styles'

import { Input } from '../Input'

export function Header(){
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder='Pesquisa pelo título'/>
      <Profile>
        <div> 
          <strong>Allan Rieri</strong>
          <a href="#">sair</a>
        </div>
        <img src="https://github.com/allanrsfer.png" alt="" />
      </Profile>
    </Container>
  )
}