import { FC } from 'react'
import { Button } from '../../styles/Button'
import { PaginationWrapper } from '../../styles/Pagination'
import { PaginationProps } from './PaginationProps'

export const Pagination: FC<PaginationProps> = ({ currentPage, onPageChange, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <PaginationWrapper>
      {pages.map((page) => (
        <Button key={page} onClick={() => onPageChange(page)} disabled={page === currentPage}>
          {page}
        </Button>
      ))}
    </PaginationWrapper>
  )
}
