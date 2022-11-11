import mongoose from 'mongoose'

import dbConnect from '../../../lib/dbConnect'
import Comments from '../../../models/Comments'

export default async function handler (req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const comment = await Comments.findOne({ _id: new mongoose.Types.ObjectId(id) })
        if (!comment) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: comment })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break

    case 'PUT':
      try {
        const pet = await Comments.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!pet) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: pet })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE':
      try {
        const deletedPet = await Comments.deleteOne({ _id: id })
        if (!deletedPet) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
