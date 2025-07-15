import React from 'react';
import TaskProvider from './TaskProvider';
import TaskList from './components/TaskList';

export default function Main() {
  return (
    <TaskProvider>
      <div style={{ padding: '20px' }}>
        <h1>Task Manager (Context + useReducer)</h1>
        <TaskList />
      </div>
    </TaskProvider>
  );
}
