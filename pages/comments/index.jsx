import Link from 'next/link'
import dbConnect from '../../lib/dbConnect'
import Comments from '../../models/Comments'

const Index = ({ comments }) => (
  <>
    {/* Create a card for each commentItem */}
    {comments.map((commentItem) => (
      <div key={commentItem._id}>
        <div className="card">
          <img src={commentItem.image_url} />
          <h5 className="commentItem-name">{commentItem.date}: {commentItem.name}</h5>
          <div className="main-content">
            <p className="commentItem-name">{commentItem.text}</p>
            <div className="btn-container">
              <Link href="/comments/[id]/edit" as={`/comments/${commentItem._id}/edit`}>
                <button className="btn edit">Edit</button>
              </Link>
              <Link href="/comments/[id]" as={`/comments/${commentItem._id}`}>
                <button className="btn view">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
)

/* Retrieves comment(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Comments.find({}).limit(20).lean()

  // TODO: simplify
  const resultSerializable = result.map(item => ({
    ...item,
    _id: item._id.valueOf(),
    movie_id: item.movie_id.valueOf(),
    date: item.date.valueOf()
  }))
  return { props: { comments: resultSerializable } }
}

export default Index
