import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: [true, "Please provide commenter name"],
  },
  email: {
    type: String,
    required: [true, 'Please specify the email of commenter.'],
  },
  movie_id: {
    type: String,
  },
  text: {
    type: String,
  },
  date: {
    type: Date,
  },
})

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema)
