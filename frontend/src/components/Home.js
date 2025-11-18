import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskCard from './TaskCard';
import { fetchTasks, createTask, completeTask } from '../api';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      console.error(err);
      alert('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleCreate = async (payload) => {
    const res = await createTask(payload);
    // Prepend newest task and limit to 5
    setTasks(prev => [res.data, ...prev].slice(0, 5));
  };

  const handleDone = async (id) => {
    try {
      await completeTask(id);
      setTasks(prev => prev.filter(t => t.id !== id));
    } catch (err) {
      alert('Failed to mark done');
    }
  };

  return (
    <div className="app">
      <div className="left">
        <TaskForm onCreate={handleCreate} />
      </div>
      <div className="right">
        <h3>Tasks</h3>
        {loading ? <div>Loading...</div> : tasks.length === 0 ? <div>No tasks</div> :
          tasks.map(t => <TaskCard key={t.id} task={t} onDone={handleDone} />)
        }
      </div>
    </div>
  );
}
