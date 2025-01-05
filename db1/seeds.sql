INSERT INTO department (name) VALUES
    ('Engineering'),
    ('Sales'),
    ('Finance'),
    ('Legal');
    ('IT');
    ON CONFLICT (name) DO NOTHING;

INSERT INTO role (title, salary, department_id) VALUES
    ('Software Engineer', 100000, 1),
    ('Sales Lead', 80000, 2),
    ('Accountant', 75000, 3),
    ('Lawyer', 120000, 4);
    ('IT Specialist', 90000, 5);
    ON CONFLICT (title) DO NOTHING;

    ALTER TABLE employee
    ADD COLUMN ID SERIAL PRIMARY KEY,

    INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('John', 'Doe', 1, NULL),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriguez', 3, 1),
    ('Kevin', 'Tupik', 4, 1);
    ('Sara', 'Smith', 5, 1);
    ON CONFLICT (id) DO NOTHING;
