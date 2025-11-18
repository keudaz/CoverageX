CREATE DATABASE IF NOT EXISTS todoapp;
USE todoapp;

CREATE TABLE IF NOT EXISTS task (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed TINYINT(1) DEFAULT 0,
  completed_at TIMESTAMP NULL,
  INDEX idx_created_at (created_at),
  INDEX idx_completed (completed)
);

-- use se sample data (ctrl+/)
-- INSERT INTO task (title, description) VALUES
-- ('Buy books', 'Buy books for the next school year'),
-- ('Clean home', 'Need to clean the bed room'),
-- ('Play Cricket', 'Plan the soft ball cricket match on next Sunday');
