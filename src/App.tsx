import { useState } from 'react';
import { Header } from './components/header';
import { Aluno } from './components/alunos';
import { Footer } from './components/footer';

interface InfoAlunoProps {
  nome: string;
  idade: string;
}

export default function App() {
  const [input, setInput] = useState("");
  const [idade, setIdade] = useState("");

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>();

  const [contador, setContador] = useState(0);

  function mostrarAluno() {
    setInfoAluno({
      nome: input,
      idade: idade,
    });

    setInput("");
    setIdade("")

  }

  function adicionar() {
    setContador(valorAtual => valorAtual + 1);
    // setContador(contador + 1); // ou simplesmente isso!

  }

  function diminuir() {
    
    // Esse if não permite que o valor do contador seja negativo, se quiser permitir número negativos, basta escluir este bloco if!
    if (contador === 0) {
      return;
    }

    setContador(valorAtual => valorAtual -1);
    // setContador(contador - 1) // ou simplesmente isso
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

        <br/><br/>
        
        <input
          type="text"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder='Digite sua idade'
        />

        <br/><br/>

        <button onClick={mostrarAluno}>Mostrar Aluno</button>
        
        <h3>Bem vindo: {infoAluno?.nome}</h3>
        <h4>Idade: {infoAluno?.idade + " anos"}</h4>
        
        {/*infoAluno?.nome => '?' interrogação antes do ponto, pois estamos tentando acessar um objeto
        com a propriedade nome que pode vir vazia! E se tiver vazia e não tiver esta interrogação vai dar erro!
        E já que o objeto infoAluno começa vazio, não temos nada na propriedade nome, nem mesmo a propriedade até
        que clicamos no botão mostrarAluno. Então caso cliquemos no botão e não tenha nada no input, seja em
        {infoAluno?.nome} e/ou em {infoAluno?.idade} então a aplicação vai deixar vazio e não vai dar erro! */}
      </div>

      <hr />

      <div>
        <h1>Contador com useState</h1>

        <button onClick={adicionar}>+</button> {contador} <button onClick={diminuir}>-</button>
        <br /><br />
      </div>

      <hr />
      <Footer />
    </div>
  )
}
