const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const projects = [
  {
    projectId: "khm-proyecto-001",
    name: "Proyecto de Logística",
    description: "Un sistema de gestión de la cadena de suministro que optimiza el flujo de productos desde la fábrica hasta el cliente.",
    fileName: "khm-proyecto-001-invoice.pdf",
    invoice: "https://drive.google.com/file/d/1TYOBAZS67pqGEQO6FiTCLu30Hp9CDU_C/view?usp=sharing",
    invoiceXml: "https://drive.google.com/file/d/11cJSWi4bXUSKTBSU6btvw_nZFqiTOnNj/view?usp=sharing",
    status: "Activo",
    initDate: "2024-06-01",
    endDate: "2024-12-01"
  },
  {
    projectId: "khm-proyecto-882",
    name: "Proyecto Diseño",
    description: "Un conjunto de herramientas de diseño gráfico y multimedia para profesionales creativos.",
    fileName: "khm-proyecto-002-invoice.pdf",
    invoice: "https://drive.google.com/file/d/1y-pVHCD-hjU1M4tReU1X3waw85qRDPpe/view?usp=sharing",
    invoiceXml: "https://drive.google.com/file/d/1VOM7Zvv4u30d4nzBKZJyzGyGDEGmxDww/view?usp=sharing",
    status: "En proceso",
    initDate: "2024-03-15",
    endDate: "2024-10-30"
  },
  {
    projectId: "khm-proyecto-003",
    name: "Proyecto de Finanzas",
    description: "Un software de gestión financiera integral que permite a las empresas llevar un seguimiento detallado de sus ingresos y egresos.",
    fileName: "khm-proyecto-003-invoice.pdf",
    invoice: "https://drive.google.com/file/d/1muYRuDcdVuq1krArWaYMFcCw33-uBMAZ/view?usp=sharing",
    invoiceXml: "https://drive.google.com/file/d/1FqxT85t2FNUN8mNMVXWKV5GUBHcQa9w5/view?usp=sharing",
    status: "Finalizado",
    initDate: "2023-11-10",
    endDate: "2024-04-10"
  }
];

// Obtener proyecto por ID
app.get('/project/:id', (req, res) => {
  const project = projects.find(p => p.projectId === req.params.id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ error: 'Proyecto no encontrado' });
  }
});

// Obtener todos los proyectos (opcional)
app.get('/projects', (req, res) => {
  res.json(projects);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
