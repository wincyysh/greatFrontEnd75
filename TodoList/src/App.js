import { useState } from "react";

let id = 0;

const INITIAL_TASKS = [
  { id: id++, label: 'Walk the dog' },
  { id: id++, label: 'Water the plants' },
  { id: id++, label: 'Wash the dishes' },
];

export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [newTask, setNewTasks] = useState('');

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input 
          aria-label="Add new task"
          type="text"
          placeholder="Add your task" 
          value={newTask}
          onChange={(event) => {
            setNewTasks(event.target.value);
          }}
        />
        <div>
          <button
            onClick={()=>{
              setTasks(
                tasks.concat({
                  id: id++,
                  label: newTask.trim(),
                }),
              );
              setNewTasks('');
            }}>
            Submit
          </button>
        </div>
      </div>
      <ul>
        {tasks.map(({ id, label }) => (
          <li key={id}>
            <span>{label}</span>
            <button
              onClick={()=>{
                setTasks(
                  tasks.filter((tasks)=> tasks.id !== id),
                );
              }}>
              Delete
            </button>
        </li>
      ))}
      </ul>
    </div>
  );
}
