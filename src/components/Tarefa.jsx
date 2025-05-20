
import './Tarefa.css';


function Tarefa({ tarefa, onToggleConcluida, onRemover }) {
 // tarefa: prop que contém o objeto { id, texto, concluida }
  // onToggleConcluida: prop que é uma função para alternar o estado concluida

  return (
    //li para cada tarefa, com estilo condicional baseado em concluida
    <li className='tarefa'>
        <span
           className={`tarefa-texto ${tarefa.concluida ? 'concluida' : ''}`}
        >
        {tarefa.texto}
        </span>

        <button
          onClick={() => onToggleConcluida(tarefa.id)} //chama a função passando o id 
          className="tarefa-botao concluir"
        >
            {tarefa.concluida ? 'Desmarcar' : 'Concluir'}
        </button>

        <button
         onClick={() => onRemover(tarefa.id)}
         className="tarefa-botao remover"
        >
            Remover
        </button>
    </li>
  );
}

export default Tarefa;