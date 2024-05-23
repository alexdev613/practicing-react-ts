export default function App() {
  return (
    <div>
      <h1>Meu Projeto</h1>
      <Aluno nome="Alex Nascimento" idade={37} />
      <Aluno nome="Matheus Fraga" idade={29} />
      <Aluno nome="Ana Caroline" idade={33} />
    </div>
  )
}
interface AlunoProps {
  nome: string;
  idade: number;
}

function Aluno({nome, idade}: AlunoProps) {
  return (
    <div>
      <h1>Aluno: {nome}</h1>
      <h3>Idade: {idade}</h3>
    </div>
  )
}