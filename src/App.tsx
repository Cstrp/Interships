import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import styled from 'styled-components'
import { router } from './router'

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const App = () => {
  const qc = new QueryClient()

  return (
    <QueryClientProvider client={qc}>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </QueryClientProvider>
  )
}
