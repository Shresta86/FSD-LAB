const express = require('express');

const app = express();

app.use(express.json());

let students = [
  {
    id: 1,
    name: "Shresta",
    age: 20,
    gpa: 8.5,
    semester: 5
  },
  {
    id: 2,
    name: "Rahul",
    age: 21,
    gpa: 8.2,
    semester: 5
  }
];

app.get('/', (req, res) => {
  res.send('Student Management API is running');
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.json(student);
});

app.post('/students', (req, res) => {
  const student = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age,
    gpa: req.body.gpa,
    semester: req.body.semester
  };

  students.push(student);

  res.status(201).json(student);
});

app.put('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  student.name = req.body.name;
  student.age = req.body.age;
  student.gpa = req.body.gpa;
  student.semester = req.body.semester;

  res.json(student);
});

app.delete('/students/:id', (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  students.splice(index, 1);

  res.json({
    message: "Student deleted successfully"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});