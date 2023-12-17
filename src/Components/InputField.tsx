import React, { useRef } from 'react'
import "./styles.css"

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
}

const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleInput = (e:any)=>{
        console.log(todo)
        setTodo(e.target.value);
    }
    
    return (
    <form className='input' onSubmit={(e)=>{
        handleInput(e);
        inputRef.current?.blur();
    }}>
        <input 
        ref={inputRef}
        type="input" placeholder='Enter a task' className='input__box' value={todo} onChange={handleInput}/>
        <button className='input__submit' type="submit">
            Go
        </button>
    </form>
  )
}

export default InputField