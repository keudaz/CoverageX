import React, { useState } from 'react';

export default function TaskForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async e => {
    e.preventDefault();
    if (!title.trim()) return alert('Title required');
    setBusy(true);
    try {
      await onCreate({ title: title.trim(), description });
      setTitle('');
      setDescription('');
    } catch (err) {
      alert('Failed to create task');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="form-card">
      <h3>Add a Task</h3>
      <form onSubmit={submit}>
        <div>
          <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} style={{width:'100%',padding:8,marginBottom:8}} />
        </div>
        <div>
          <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} style={{width:'100%',padding:8,height:90}} />
        </div>
        <div style={{textAlign:'right', marginTop:8}}>
          <button className="add-btn" type="submit" disabled={busy}>{busy ? 'Adding...' : 'Add'}</button>
        </div>
      </form>
    </div>
  );
}
