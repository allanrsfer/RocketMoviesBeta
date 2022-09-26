import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { Container, NewContainer } from './styles'

import { Tags } from '../Tags'

export function Note({ icon: Icon, data, ...rest }) {
  return (
    <Container { ...rest }>
      <div>
        <h1>{data.title}</h1>
        {Icon && <Icon size={18}/>}
        {Icon && <Icon size={18}/>}
        {Icon && <Icon size={18}/>}
        {Icon && <Icon size={18}/>}
        {Icon && <Icon size={18}/>}
      </div>
      <p>{data.text}</p>
      {
        data.tags &&
        <a href="#">
          {data.tags.map(tag => <Tags key={tag.name} title={tag.name}/>)}
        </a>
      }
    </Container>
  )
}

export function NewNote({ icon: Icon, data, ...rest }) {
  return (
    <NewContainer { ...rest }>
      <div><a href="#"><FiArrowLeft/> Voltar</a></div>
      <div>
        <div>
          <h1>{data.title}</h1>
          {Icon && <Icon size={18}/>}
          {Icon && <Icon size={18}/>}
          {Icon && <Icon size={18}/>}
          {Icon && <Icon size={18}/>}
          {Icon && <Icon size={18}/>}
        </div>
        <div>
          <img src="https://github.com/allanrsfer.png" alt="" />
          <h2>Por Allan Rieri</h2>
          <p><FiClock /></p>
          <h2>23/09/22 às 14:08</h2>
        </div>
      </div>
      {
        data.tags &&
        <a href="#">
          {data.tags.map(tag => <Tags key={tag.name} title={tag.name}/>)}
        </a>
      }
      <p>{data.text}</p>
      
    </NewContainer>
  )
}