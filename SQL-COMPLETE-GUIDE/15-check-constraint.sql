UPDATE users
SET yearly_salary = NULL
WHERE full_name = 'Michael Smith';
ALTER TABLE users
ADD CONSTRAINT yearly_salary_positive CHECK (yearly_salary > 0);