import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';
import { HeaderTabsProps } from './headerTabsProps';

export const HeaderTabs = ({ tabs }: HeaderTabsProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleChange = (evt: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Tabs value={selectedTab} onChange={handleChange}>
      {tabs.map((tab) => (
        <Tab key={tab.id} component={Link} to={tab.link} label={tab.label} />
      ))}
    </Tabs>
  );
};
