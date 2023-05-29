import { CSVLink } from 'react-csv';
import { Data } from 'react-csv/components/CommonPropTypes';

export const CSV = ({ data }: { data: string | Data }) => {
  const csvHeaders = [
    { label: 'id', key: 'id' },
    { label: 'Identifier', key: 'identifier' },
    { label: 'firstname', key: 'firstname' },
    { label: 'lastname', key: 'lastname' },
    { label: 'address', key: 'address' },
  ];

  return (
    <CSVLink data={data} headers={csvHeaders}>
      Export to CSV
    </CSVLink>
  );
};
