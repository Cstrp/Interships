import { STATUS } from '../enums';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItem } from '../utils';

export const useStatus = ({ status, id }: { id?: string | number; status?: STATUS }) => {
  const navigate = useNavigate();
  const currentStatus = getItem('status');
  const currentUserId = getItem('id');

  useEffect(() => {
    console.log(currentUserId === id);
  }, []);
};
