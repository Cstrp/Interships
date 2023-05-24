import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { SignUpForm } from '../../components';

export const SignUp = (): JSX.Element => {
  return (
    <Card className={'w-1/2 p-5'}>
      <CardHeader subheader={<Typography variant={'h4'}>Sign Up</Typography>} />
      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
  );
};
