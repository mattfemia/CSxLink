-- Create new user
INSERT INTO residents
(resident_id, github_id, github_node_id, email, github, firstname, location)
VALUES ($1, $2, $3, $4, $5, $6, $7)