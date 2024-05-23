import { Header } from './components/header';
import { Aluno } from './components/alunos';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div>
      <Header title={''} />
      
      <Aluno nome="Alex Nascimento" idade={37} />
      
      <Aluno nome="Matheus Fraga" idade={29} />
      
      <Aluno nome="Ana Caroline" idade={33} />

      <Footer />
    </div>
  )
}
