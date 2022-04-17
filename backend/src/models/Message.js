import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const MessageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: 'chat',
    },
    content: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('message', MessageSchema);
