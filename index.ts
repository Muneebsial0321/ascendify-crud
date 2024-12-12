require('dotenv').config()
import express from 'express';
import cookie from 'cookie-parser'
import cors from 'cors'
import user from './routes/user.route'
import tasks from './routes/task.route'
import db_Connection from './db/mongo.db';

db_Connection()
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors({origin:process.env.CLIENT_URL,credentials:true}));
app.use(cookie());

// Routes
app.use('/users',user)
app.use('/tasks',tasks)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
