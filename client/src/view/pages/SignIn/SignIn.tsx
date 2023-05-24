import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { SignInForm } from '../../components';

export const SignIn = (): JSX.Element => {
  return (
    <Card className={'w-1/2 p-5 flex flex-col gap-5'}>
      <CardHeader subheader={<Typography variant={'h4'}>Sign In</Typography>} />
      <CardContent>
        <SignInForm />
      </CardContent>
    </Card>
  );
};
