import React from 'react';
import tarefas from './App';

const TarefasConcluidas = ({ tarefasconcluidas }) => {
  return (
    <div className='listaTarefasConc'>
        <h1>Tarefas Concluidas</h1>
        <div className='TarefasConc'>
        {tarefasconcluidas.map((tasks) => (
          <div key={tasks.id}>
            <p>{tasks.text}</p>
            <p>({tasks.category})</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TarefasConcluidas