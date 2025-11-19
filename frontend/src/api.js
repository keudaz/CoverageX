const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000';

export async function fetchTasks() {
  const r = await fetch(`${API_BASE}/api/tasks`);
  if (!r.ok) throw new Error('Failed fetching tasks');
  const json = await r.json();
  return json.data;
}

export async function createTask(payload) {
  const r = await fetch(`${API_BASE}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!r.ok) throw new Error('Failed creating task');
  return r.json();
}

export async function completeTask(id) {
  const r = await fetch(`${API_BASE}/api/tasks/${id}/complete`, { method: 'PUT' });
  if (!r.ok) throw new Error('Failed completing task');
  return r.json();
}
