import { useState } from 'react';

function FormsPage () {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App-todo-list">
      <h1>Create a new post</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="New post"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul className='form-list' >
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: task.startsWith('~') && task.endsWith('~') ? 'line-through' : 'none',
              }}
            >
              {task.replace(/~/g, '')}
            </span>
              <span className='change_buttons'>
                <button className='change__btn' onClick={() => handleDeleteTask(index)}>Delete</button>
              </span>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default FormsPage;


