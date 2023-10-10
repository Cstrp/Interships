import { FC } from 'react'
import { Link } from 'react-router-dom'
import { PostListProps } from './PostListProps'

export const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
