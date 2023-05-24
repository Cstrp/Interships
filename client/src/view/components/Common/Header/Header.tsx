import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { HeaderTabs } from '../HeaderTabs/HeaderTabs.tsx';
import { tabs } from './tabs.ts';

export const Header = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar variant={'elevation'} color={'inherit'}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>TEST APP</Typography>

          <HeaderTabs tabs={tabs} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
