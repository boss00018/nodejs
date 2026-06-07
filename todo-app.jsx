import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const addTask = () => {
    const text = task.trim();
    if (!text) {
      alert('Add a task');
      return;
    }
    setList([...list, { text, done: false }]);
    setTask('');
  };

  const removeTask = index => {
    setList(list.filter((_, i) => i !== index));
  };

  const completeTask = index => {
    setList(list.map((item, i) =>
      i === index ? { ...item, done: true } : item
    ));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 400, margin: '0 auto' }}>
      <h2>React TODO</h2>
      <div>
        <input
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="New task"
          style={{ width: '70%', padding: 8 }}
        />
        <button onClick={addTask} style={{ padding: '8px 12px', marginLeft: 8 }}>
          Add
        </button>
      </div>
      <p>Tasks: {list.length}</p>
      <ul style={{ paddingLeft: 20 }}>
        {list.map((item, index) => (
          <li key={index} style={{ marginBottom: 8 }}>
            <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
              {item.text}
            </span>
            <button
              onClick={() => completeTask(index)}
              disabled={item.done}
              style={{ marginLeft: 8 }}
            >
              {item.done ? 'Done' : 'Complete'}
            </button>
            <button
              onClick={() => removeTask(index)}
              style={{ marginLeft: 8 }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
