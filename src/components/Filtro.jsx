import './Filtro.css'; 

function Filtro({ filtro, setFiltro }) {
//filtro: prop com o valor atual do filtro ('todas', 'concluidas' e 'nao-concluidas')
//setFiltro: prop com a função para atualizar o filtro
  return (
    //Div que agrupa os botões de filtro
    <div className='filtro'>
        <button //botão para o filtro "todas"
          className={`filtro-botao ${filtro === 'todas' ? 'ativo' : ''}`} //classe 'ativo' se selecionado
          onClick={() => setFiltro('todas')} //Atualiza o filtro para 'todas'
        >
            Todas
        </button>

        <button //botão para o filtro "Concluidas"
        className={`filtro-botao ${filtro === 'concluidas' ? 'ativo' : ''}`} //Classe 'ativo' se selecionado
        onClick={() => setFiltro ('concluidas')} //Atualiza o filtro para 'concluidas'
        >
            Concluídas
        </button>

        <button //Botão para o filtro "Não conluidas"
        className={`filtro-botao ${filtro === 'nao-concluidas' ? 'ativo' : ''}`} //Classe 'ativo' se selecionado
        onClick={() => setFiltro ('nao-concluidas')} //atualiza o filtro para 'nao-concluidas'
        >
            Não Concluídas
        </button>
    </div>
  );

}

export default Filtro;