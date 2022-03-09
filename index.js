import express from 'express';
import dbset from './config/database.js';
import recipeRoute from './routes/index.js';
import cors from 'cors';

const app = express();

try {
    await dbset.authenticate();
    console.log('Terhubung ke database!');
} catch (error) {
    console.log('Tidak ada koneksi database!');
}

// middleware
app.use(cors());
app.use(express.json())
app.use('/foodrecipes', recipeRoute);

app.listen(5000, () => console.log('Server berjalan pada port 5000'));