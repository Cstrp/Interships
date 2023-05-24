import { Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HeaderTabsProps } from './headerTabsProps.ts';

export const HeaderTabs = ({ tabs }: HeaderTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (evt: React.SyntheticEvent, newValue: number) => {
    evt.preventDefault();
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} orientation={'horizontal'} selectionFollowsFocus>
      {tabs.map((tab, idx) => (
        <Tab component={Link as any} to={tab.title} key={idx} label={tab.title} />
      ))}
    </Tabs>
  );
};
