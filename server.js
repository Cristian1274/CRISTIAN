const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const projects = [
  {
    projectId: "khm-proyecto-001",
    name: "Proyecto de Logística",
    status: "Activo",
    initDate: "2024-06-01",
    endDate: "2024-12-01"
  },
  {
    projectId: "khm-proyecto-882",
    name: "Proyecto Diseño",
    status: "En proceso",
    initDate: "2024-03-15",
    endDate: "2024-10-30"
  },
  {
    projectId: "khm-proyecto-003",
    name: "Proyecto de Finanzas",
    status: "Finalizado",
    initDate: "2023-11-10",
    endDate: "2024-04-10"
  }
];

app.get('/project/:id', (req, res) => {
  const project = projects.find(p => p.projectId === req.params.id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ error: 'Proyecto no encontrado' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
