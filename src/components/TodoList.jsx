import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, destroy, selectFilteredTodos, getTodosAsync } from "../redux/todos/todosSlice";
import Error from "./Error";
import { Loading } from "./Loading";


function TodoList() {

  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos)
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(getTodosAsync())
  }, [dispatch])
 
  const handleDestroy = (id) => {
    if (window.confirm("Are you sure to delete this item ?")) {
      dispatch(destroy(id));
    }
  };

  if (isLoading){
    return <Loading />
  }

  if (error){
    return <Error  message={error} />
  }

  return (
    <ul className="todo-list">
      {/* <li className="completed">
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>Learn JavaScript</label>
					<button className="destroy"></button>
				</div>
			</li> */}
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => dispatch(toggle({ id: item.id }))}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
