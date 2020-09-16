CREATE TABLE message (
  message_id INT NOT NULL AUTO_INCREMENT,
  message_first_name VARCHAR(50) NOT NULL,
  message_last_name VARCHAR(50) NOT NULL,
  message_email VARCHAR(80) NOT NULL,
  message_phone VARCHAR(15) NOT NULL,
  message_address VARCHAR(150) NULL,
  message_text VARCHAR(800) NOT NULL,
  message_created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (message_id))