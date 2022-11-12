import { useRouter } from 'next/router'
import useSWR from 'swr'
import CommentForm from '../../../components/CommentForm'

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data)

const EditComment = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: comment, error } = useSWR(id ? `/api/comments/${id}` : null, fetcher)

  if (error) return <p>Failed to load</p>
  if (!comment) return <p>Loading...</p>

  const commentForm = {
    name: comment.name,
    email: comment.email,
    movie_id: comment.movie_id,
    text: comment.text,
    date: comment.date,
  }

  return <CommentForm formId="edit-comment-form" commentForm={commentForm} forNewComment={false} />
}

export default EditComment
