import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ChatSchema = new Schema(
  {
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('chat', ChatSchema);
