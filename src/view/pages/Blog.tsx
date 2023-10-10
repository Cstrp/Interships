import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { Post } from '../../data/types'
import { DetailedPost } from '../components/DetailedPost/DetailedPost'

export const Blog = () => {
  const { id } = useParams<{ id: string }>()

  const { data: post } = useQuery<Post>(['post', id], async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })

  return (
    <>
      <Link to="/">Back to Home</Link>
      <div>
        <h1>Post Detail</h1>
        <DetailedPost post={post || null} />
      </div>
    </>
  )
}
