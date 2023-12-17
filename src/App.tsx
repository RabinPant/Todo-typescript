import React, { useState } from 'react';

import './App.css';
import InputField from './Components/InputField';
import { Todo } from './model';
import ToDoList from './Components/ToDoList';

const App:React.FC =()=> {
  const[todo, setTodo] = useState<string>("");
  const[todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e:React.FormEvent)=>{
    
    // updated
    e.preventDefault()
  
    if(todo){
      setTodos([...todos,{id:Date.now(), todo:todo, isDone:false}])
      setTodo("");
      }
  };
  console.log(todos);
  return (
    <div className='app'>
      <span className='heading'>Taskify</span>
      <InputField todo = {todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <ToDoList />
    </div>
  );
}

export default App;
