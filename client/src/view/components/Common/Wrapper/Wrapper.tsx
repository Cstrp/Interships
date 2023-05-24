import { WrapperProps } from './wrapperProps';
import { Box, Container } from '@mui/material';
import { Header } from '../Header/Header';

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Container maxWidth={'xl'}>
      <Box component={'div'} className={'w-full h-screen flex flex-col justify-center items-center'}>
        <Header />
        <Box component={'div'} className={'w-full h-screen flex flex-col justify-center items-center'}>
          {children}
        </Box>
      </Box>
    </Container>
  );
};
