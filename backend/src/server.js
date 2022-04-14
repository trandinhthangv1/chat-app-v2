import 'dotenv/config';
import mongoDb from './config/MongoDb.js';
import app from './app.js';

mongoDb.connect();

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
