import { CSVLink } from 'react-csv';
import { Data } from 'react-csv/components/CommonPropTypes';

export const Csv = ({ data }: { data: string | Data }) => {
  const csvHeaders = [
    { label: 'id', key: 'id' },
    { label: 'identifier', key: 'identifier' },
    { label: 'firstname', key: 'firstname' },
    { label: 'lastname', key: 'lastname' },
    { label: 'address', key: 'address' },
    { label: 'phone', key: 'phone' },
  ];
  return (
    <CSVLink data={data} headers={csvHeaders}>
      Export to CSV
    </CSVLink>
  );
};
