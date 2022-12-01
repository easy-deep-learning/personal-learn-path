import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dbConnect from '../../../lib/dbConnect'
import Comments from '../../../models/Comments'

const CommentsPage = ({ comment }) => {
  const router = useRouter()
  const [message, setMessage] = useState('')

  const handleDelete = async () => {
    const commentID = router.query.id

    try {
      await fetch(`/api/pets/${commentID}`, {
        method: 'Delete',
      })
      router.push('/')
    } catch (error) {
      setMessage('Failed to delete the comment.')
    }
  }

  return (
    <div key={comment._id}>
      <div className="card">
        <img src={comment.image_url} />
        <h5 className="comment-name">{comment.date}{comment.name}</h5>
        <div className="main-content">
          <p className="comment-name">{comment.email}</p>
          <p className="comment-name">{comment.movie_id}</p>
          <p className="comment-name">{comment.text}</p>
          <p className="comment-name">{comment.date}</p>

          <div className="btn-container">
            <Link href="/comments/[id]/edit" as={`/comments/${comment._id}/edit`}>
              <button className="btn edit">Edit</button>
            </Link>
            <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}

export async function getServerSideProps ({ params }) {
  await dbConnect()

  const comment = await Comments.findById(params.pageid).lean()
  comment._id = comment._id.valueOf()

  return {
    props: {
      comment: {
        ...comment,
        _id: comment._id.valueOf(),
        movie_id: comment.movie_id.valueOf(),
        date: comment.date.valueOf()
      }
    }
  }
}

export default CommentsPage
