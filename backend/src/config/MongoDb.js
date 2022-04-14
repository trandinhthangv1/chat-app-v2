import mongoose from 'mongoose';

class MongoDb {
  async connect() {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connect mongodb success');
    } catch (error) {
      console.log('Connect mongodb error', error);
    }
  }
}

export default new MongoDb();
