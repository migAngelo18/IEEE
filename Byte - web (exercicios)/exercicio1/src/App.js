import './App.css';
import { useState } from "react";
import Tarefas from './components/App'
import NewTarefas from './components/newTarefas';
import TarefasConcluidas from './components/TarefasConcluidas';


function App() {
  
  const [tarefas, setTarefas] = useState([
    
{
      id:1,
      text: "Preencher a PCH",
      category: "Faculdade",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);

  const AddTarefa = (text, category) => {
    const NovasTarefas = [...tarefas, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false
    }]

    setTarefas(NovasTarefas);
  }

  const RemoveTarefa = (id) => {
    const NovasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(NovasTarefas);
  }


  const ConcluirTarefa = (id) => {
    const NovasTarefas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, isCompleted: true } : tarefa,
    );
    let taskDone = 
    setTarefas(NovasTarefas);
   
  }
    
  const tarefaConcluida = (id, tasksDone) =>{
       tasksDone = tarefas.sort((tarefa) => tarefa.id === id);
    
      // Adiciona a tarefa concluída ao estado tarefasConcluidas
      setTarefasConcluidas([...tarefasConcluidas, tasksDone]);
  } 
    
  


  return <div className='principal'>
    <h1>Lista de Tarefas</h1>
    <div className='ListaTarefas'>
    {tarefas.length === 0 ? (
          <p>Nenhuma tarefa adicionada</p>
        ) : 
      (tarefas.map((tarefas) => (
        (tarefas.filter((tarefas.isCompleted == false) => {
          <Tarefas key={tarefas.id} tarefas={tarefas} RemoveTarefa={RemoveTarefa} ConcluirTarefa={ConcluirTarefa}/>
        })
      ))))}
        
  
    </div>
    <NewTarefas AddTarefa={AddTarefa} />
        <TarefasConcluidas tarefasconcluidas={tarefasConcluidas} /> 
    </div>;
}


export default App;
