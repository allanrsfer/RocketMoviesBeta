import { FiX, FiPlus } from 'react-icons/fi'
import { Container, Form, Bookmarks, Button} from './styles'

import { Header } from '../../components/Header'
import { Back } from '../../components/Back'

export function Create() {
  return (
    <Container>
      <Header />
        <Back />
      <Form>
        <h1>Novo filme</h1>
        <div>
          <input type="text" placeholder='Título' />
          <input type="text" placeholder='Sua nota(de 0 a 5)'/>
        </div>
        <textarea placeholder='Observações'></textarea>
      </Form>
      <Bookmarks>
        <h2>Marcadores</h2>
        <div>
          <span>React <FiX /></span>
          <span>Novo Marcador <FiPlus /></span>
        </div>
      </Bookmarks>
      <Button>
        <button>
          Excluir Filme
        </button>
        <button>
          Salvar alterações
        </button>
      </Button>
    </Container>
  )
}