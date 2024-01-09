const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: 'http://95.140.154.232', // Разрешить только этот домен
    methods: ['GET', 'POST', 'DELETE'], // Разрешить только эти методы
  }));

app.get('/', (req, res) => {
  res.json({ msg: 'Этот маршрут поддерживает CORS' });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
