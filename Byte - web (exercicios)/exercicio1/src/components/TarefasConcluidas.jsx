import React from 'react';
import tarefas from './App';

const TarefasConcluidas = ({ tarefasConcluidas }) => {
  return (
    <div className='listaTarefasConc'>
        <h1>Tarefas Concluidas</h1>
        <div className='TarefasConc'>
        {tarefasConcluidas.map((tarefas) => (
          <div key={tarefas.id}>
            <p>{tarefas.text}</p>
            <p>({tarefas.category})</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TarefasConcluidas