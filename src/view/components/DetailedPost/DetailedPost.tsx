import { FC } from 'react'
import { DetailedPostProps } from './DetailedPostProps'

export const DetailedPost: FC<DetailedPostProps> = ({ post }) => {
  if (!post) {
    return <p>Loading...Please wait...</p>
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
