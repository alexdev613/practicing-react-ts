import { useState } from 'react';
import { Header } from './components/header';
import { Aluno } from './components/alunos';
import { Footer } from './components/footer';

export default function App() {
  const [input, setInput] = useState("");
  const [aluno, setAluno] = useState("");
  const [idade, setIdade] = useState("");
  const [alunoIdade, setAlunoIdade] = useState("");

  function mostrarAluno() {
    setAluno(input);
    setInput("")
    setAlunoIdade(idade);
    setIdade("")
  }
  
  return (
    <div>
      <Header title={'Aprendendo do zero ao avançado!'} />
      
      <Aluno nome="Alex Nascimento" idade={37} />
      
      <Aluno nome="Matheus Fraga" idade={29} />
      
      <Aluno nome="Ana Caroline" idade={33} />

      <hr />

      <div>
        <h1>Conhecendo useState</h1>

        <input
          type="text"
          value={input}
          onChange={ (e) => setInput(e.target.value)}
          placeholder='Digite o nome'
        />

        <input
          type="text"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder='Digite sua idade'
        />

        <button onClick={mostrarAluno}>Mostrar Aluno</button>
        
        <h3>Bem vindo: {aluno}</h3>
        <h4>Idade: {alunoIdade + " anos"}</h4>
      </div>
      <Footer />
    </div>
  )
}
