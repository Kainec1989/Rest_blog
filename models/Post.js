import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  creator: String,
  createdAt: { type: Date, default: Date.now }
});

postSchema.methods.toJSON = function() {
  const post = this.toObject();
  post.createdAt = post.createdAt.toLocaleDateString('en-GB');
  return post;
};

export default mongoose.model('Post', postSchema);