import React from 'react'
import "./styles.css"

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField:React.FC<Props> = ({todo,setTodo}) => {
    const handleInput = (e:any)=>{
        console.log(todo)
        setTodo(e.target.value);
    }
    return (
    <form className='input'>
        <input type="input" placeholder='Enter a task' className='input__box' value={todo} onChange={handleInput}/>
        <button className='input__submit' type="submit">
            Go
        </button>
    </form>
  )
}

export default InputField