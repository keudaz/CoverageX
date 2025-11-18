import React from 'react';

export default function TaskCard({ task, onDone }) {
  return (
    <div className="task-card">
      <div>
        <div style={{fontWeight:700}}>{task.title}</div>
        {task.description ? <div className="small-desc">{task.description}</div> : null}
      </div>
      <div>
        <button className="done-btn" onClick={() => onDone(task.id)}>Done</button>
      </div>
    </div>
  );
}
