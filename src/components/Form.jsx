import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos/todosSlice';

const Form = () => {
  const handleSubmit = (e) => {
    console.log('test')
  }
  return (
    <form onSubmit={handleSubmit}>
			<input className="new-todo" placeholder="What needs to be done?" autoFocus  />
		</form>
  )
}

export default Form;