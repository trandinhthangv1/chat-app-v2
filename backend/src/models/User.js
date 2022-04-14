import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      default:
        'https://res.cloudinary.com/dlgi1yqxd/image/upload/v1648378938/Chat-app/avatar_default.png',
    },
  },
  { timestamps: true }
);

export default mongoose.model('user', UserSchema);
