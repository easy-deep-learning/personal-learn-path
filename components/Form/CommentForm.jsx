import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'

const CommentForm = ({ formId, commentForm, forNewComment = true }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    name: commentForm.name,
    email: commentForm.email,
    movie_id: commentForm.movie_id,
    text: commentForm.text,
    date: commentForm.date,
  })

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query

    try {
      const res = await fetch(`/api/comments/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      const { data } = await res.json()

      mutate(`/api/comments/${id}`, data, false) // Update the local data without a revalidation
      router.push('/')
    } catch (error) {
      setMessage('Failed to update comment')
    }
  }

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      router.push('/')
    } catch (error) {
      setMessage('Failed to add comment')
    }
  }

  const handleChange = (e) => {
    const target = e.target
    const value =
      target.name === 'poddy_trained' ? target.checked : target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  /* Makes sure comment info is filled for comment name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {}
    if (!form.name) err.name = 'Name is required'
    if (!form.owner_name) err.owner_name = 'Owner is required'
    if (!form.species) err.species = 'Species is required'
    if (!form.image_url) err.image_url = 'Image URL is required'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      forNewComment ? postData(form) : putData(form)
    } else {
      setErrors({ errs })
    }
  }

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            maxLength="20"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="owner_name">email</label>
          <input
            type="text"
            maxLength="20"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="species">movie_id</label>
          <input
            type="text"
            maxLength="30"
            name="movie_id"
            value={form.movie_id}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="diet">text</label>
          <textarea
            name="text"
            maxLength="60"
            value={form.text}
            onChange={handleChange}
          />
        </fieldset>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  )
}

export default CommentForm
