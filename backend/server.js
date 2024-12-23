const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const candidates = [
    { name: "Ajay", skills: ["JavaScript", "React"], yearsOfExperience: 5 },
    { name: "Bobby", skills: ["Python", "Django"], yearsOfExperience: 8 },
    { name: "Divya ", skills: ["Java", "Spring"], yearsOfExperience: 6 },
    { name: "Elina", skills: ["C#", ".NET"], yearsOfExperience: 4 },
    { name: "Govind", skills: ["PHP", "Laravel"], yearsOfExperience: 7 },
    { name: "Fahad", skills: ["Ruby", "Rails"], yearsOfExperience: 3 },
    { name: "Krishna", skills: ["Go", "Kubernetes"], yearsOfExperience: 9 },
    { name: "Hari", skills: ["C++", "Qt"], yearsOfExperience: 2 },
    { name: "Isha", skills: ["Swift", "iOS Development"], yearsOfExperience: 5 },
    { name: "Jyothi", skills: ["Kotlin", "Android Development"], yearsOfExperience: 6 }
];

app.get('/api/candidates', (req, res) => {
    res.json(candidates);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
