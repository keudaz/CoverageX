import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function TaskCard({ task, onDone }) {
  return (
    <Card className="task-card mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div className="flex-grow-1">
            <div className="task-title">{task.title}</div>
            {task.description && (
              <div className="task-description mt-2">{task.description}</div>
            )}
          </div>
          <Button 
            variant="success" 
            className="btn-done ms-3"
            onClick={() => onDone(task.id)}
          >
            <i className="fas fa-check me-1"></i> Done
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
