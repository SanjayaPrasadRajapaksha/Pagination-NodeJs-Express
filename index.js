import express from 'express';
import { sequelize } from './config/sequelize.js';
import userRoutes from './routes/userRoutes.js';
import User from './models/user.js';  // Import the User model to create the tables

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

const startServer = async () => {
  try {
    // Sync the database and create tables if they don't exist
    await sequelize.sync({ force: false });  // Set to `true` for recreating tables on each run (for development).
    console.log('Tables created!');

    await sequelize.authenticate();
    console.log('Database connected...');

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

startServer();
