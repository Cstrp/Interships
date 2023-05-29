import { CSVLink } from 'react-csv';
import { Data, Headers } from 'react-csv/components/CommonPropTypes';

export const CSV = ({ data, headers }: { data: string | Data; headers: Headers }) => {
  return (
    <CSVLink data={data} headers={headers}>
      Export to CSV
    </CSVLink>
  );
};
