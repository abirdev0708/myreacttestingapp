import React, { useReducer } from 'react';
import { TaskContext } from './TaskContext';

const initialTasks = [
  { id: 1, text: 'Learn Context', completed: false },
  { id: 2, text: 'Practice useReducer', completed: false }
];

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'TOGGLE':
      return state.map(task =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    case 'REMOVE':
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
}

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
