import { Box, Container } from '@mui/material';
import { RouterProvider } from 'react-router';
import { router } from './router.tsx';
import { Header } from './view/components';

export const App = (): JSX.Element => {
  return (
    <Container maxWidth={'xl'}>
      <Box component={'div'} className={'w-full h-screen flex flex-col justify-center items-center'}>
        <Header />
        <Box component={'div'} className={'w-full h-screen flex flex-col justify-center items-center'}>
          <RouterProvider router={router} />
        </Box>
      </Box>
    </Container>
  );
};
