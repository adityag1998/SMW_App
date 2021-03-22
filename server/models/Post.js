import pkg from 'mongoose';
const { model, Schema } = pkg;

const postSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
});

export const Post = model('Post', postSchema);
