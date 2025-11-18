import React, { useState } from 'react';
import { Button, Card, Form} from 'react-bootstrap';

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
    <Card className="form-card sticky-top" style={{ top: '2rem' }}>
      <Card.Body>
        <div className="d-flex align-items-center mb-4">
          <div className="icon-wrapper">
            <i className="fas fa-sparkles"></i>
          </div>
          <h3 className="form-card-title mb-0">New Task</h3>
        </div>
        
        <Form onSubmit={submit}>
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
            />
          </Form.Group>
          
          <Form.Group className="mb-4">
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Add more details... (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-input"
            />
          </Form.Group>
          
          <div className="d-grid">
            <Button 
              variant="primary" 
              type="submit" 
              className="btn-add"
              disabled={busy}
            >
              <i className="fas fa-plus me-2"></i>
              {busy ? 'Adding...' : 'Add Task'}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
