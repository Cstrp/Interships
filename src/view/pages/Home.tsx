import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Post } from '../../data/types'
import { Pagination, PostList } from '../components'

export const Home = () => {
  const [page, setPage] = useState<number>(1)

  const { data: posts } = useQuery<Post[]>(['posts', page], async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)

    if (!res.ok) {
      throw new Error('Failed to fetch posts')
    }

    return res.json()
  })

  return (
    <>
      <h1>Blog Posts</h1>
      <PostList posts={posts!} />
      <Pagination currentPage={page} onPageChange={setPage} totalPages={10} />
    </>
  )
}
