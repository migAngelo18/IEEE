import React from 'react'
import { useState } from 'react'

const NewTarefas = ({ AddTarefa }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value.trim() === "" || category === "") {
            alert("Por favor, preencha todos os campos antes de criar a tarefa!");
            return;
        }
        console.log(value, category);
        AddTarefa(value, category);
        setCategory("")
        setValue("")
    }

  return (
    <div className='newTarefas'>
        <h2>Inserir nova Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Digite a Tarefa' value={value} onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione a Categoria</option>
                <option value="Faculdade">Faculdade</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button className='botao1' type='submit'>Criar Tarefa</button>
        </form>
        </div>
  )
}

export default NewTarefas