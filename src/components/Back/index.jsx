import { FiArrowLeft } from "react-icons/fi"
import { Container } from "./styles"

export function Back() {
  return (
    <Container>  
      <FiArrowLeft /> <span>Voltar</span>
    </Container>
  )
}