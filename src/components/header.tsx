import './header.css';

interface HeaderProps {
  title?: string;
}

// com a prop title opcional posso lançar nela um valor padrão, para caso não for passado
// nada ao chamar este componente este valor que aparecerá

export function Header({ title = "Curso Reac + TypeScript" }: HeaderProps) {
  return (
    <header className='header'>
      <h1 className='title'>{title}</h1>

      <hr />
    </header>
  )
}