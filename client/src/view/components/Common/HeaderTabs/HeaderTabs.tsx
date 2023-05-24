import { Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { HeaderTabsProps } from './headerTabsProps';

export const HeaderTabs = ({ tabs }: HeaderTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (evt: React.SyntheticEvent, newValue: number) => {
    evt.preventDefault();
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} orientation={'horizontal'} selectionFollowsFocus>
      {tabs.map((tab, idx) => (
        <Tab key={idx} component={Link} to={tab.link} label={tab.title} />
      ))}
    </Tabs>
  );
};
