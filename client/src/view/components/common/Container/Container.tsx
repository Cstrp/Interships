import { Box, Container as Wrapper } from '@mui/material';
import { Header } from '..';
import { ContainerProps } from './containerProps';

export const Container = ({ children }: ContainerProps) => {
  return (
    <Wrapper maxWidth={'xl'}>
      <Box component={'div'} className={'w-full h-screen flex flex-col justify-center items-center'}>
        <Header />
        <Box component={'div'} className={'w-full h-screen flex flex-col justify-center items-center'}>
          {children}
        </Box>
      </Box>
    </Wrapper>
  );
};
