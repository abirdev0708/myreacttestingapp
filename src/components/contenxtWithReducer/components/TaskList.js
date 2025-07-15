import React, { useContext } from 'react';
import { TaskContext } from '../TaskContext';

export default function TaskList() {
  const { tasks, dispatch } = useContext(TaskContext);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => dispatch({ type: 'TOGGLE', id: task.id })}
            >
              {task.text}
            </span>
            <button onClick={() => dispatch({ type: 'REMOVE', id: task.id })}>❌</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          dispatch({ type: 'ADD', text: 'New Task ' + (tasks.length + 1) })
        }
      >
        ➕ Add Task
      </button>
    </div>
  );
}
