import express from 'express';
import { pool, connecToDb } from './db/connection.js';
import {inquirer} from "inquirer";
import figlet from 'figlet';
import "console.table";

await connecToDb();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.clear();

figlet.text('Employee Tracker', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});

app.get('/', (req, res) => {
    res.send('Welcome to Employee Tracker');
});

app.get('/employees', async (req, res) => {
    const employees = await pool.query('SELECT * FROM employees');
    res.json(employees.rows);
});

app.get('/roles', async (req, res) => {
    const roles = await pool.query('SELECT * FROM roles');
    res.json(roles.rows);
});

app.get('/departments', async (req, res) => {
    const departments = await pool.query('SELECT * FROM departments');
    res.json(departments.rows);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

