import React from 'react'


const tarefas  = ({ tarefas, RemoveTarefa, ConcluirTarefa, isCompleted}) => {
    
  return (
    <div className='tarefas'>
          <div className='conteudo'>
            <p>{tarefas.text}</p>
          </div>
          <div className='categoria'>
            <p>({tarefas.category})</p>
            </div>
            <div className='buttons'>
              <button className='botao1' onClick={() => ConcluirTarefa(tarefas.id) }>Completar Tarefa</button>
              <button className='botao2' onClick={() => RemoveTarefa(tarefas.id) }>X</button>
              </div>
        </div>
  )
}

export default tarefas 