
interface AlunoProps {
    nome: string;
    idade: number;
  }
  
export function Aluno({nome, idade}: AlunoProps) {
  return (
    <div>
      <h1>Aluno: {nome}</h1>
      <h3>Idade: {idade}</h3>
    </div>
  )
}