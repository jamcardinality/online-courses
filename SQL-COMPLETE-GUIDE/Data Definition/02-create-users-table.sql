CREATE TYPE employment_status AS ENUM('employed', 'self-employed', 'unmemployed');
CREATE TABLE users (
    full_name VARCHAR(200),
    yearly_salary INT,
    current_status employment_status -- current_status ENUM('employed', 'self-employed', 'unmemployed') -- MySQL syntax\
);