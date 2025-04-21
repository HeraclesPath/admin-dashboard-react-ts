import { useEffect } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import DataTable from '../components/DataTable';
import { fetchLogs } from '../api/ApiCollection';

const Logs = () => {
  const { isLoading, isError, isSuccess, data = [] } = useQuery({
    queryKey: ['all-logs'],
    queryFn: fetchLogs,
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'Name',
      minWidth: 220,
      flex: 1,
      renderCell: ({ row }) => (
        <div className="flex gap-3 py-[6px] items-center">
          <div className="avatar">
            <div className="w-6 xl:w-9 rounded-full">
              <img
                src={row.img || '/Portrait_Placeholder.png'}
                alt="user-picture"
              />
            </div>
          </div>
          <span className="mb-0 pb-0 leading-none">
            {row.firstName} {row.lastName}
          </span>
        </div>
      ),
    },
    { field: 'role', headerName: 'Role', minWidth: 100, flex: 1 },
    { field: 'email', headerName: 'Email', minWidth: 200, flex: 1 },
    { field: 'date', headerName: 'Date', minWidth: 120, flex: 1 },
    { field: 'time', headerName: 'Time', minWidth: 100, flex: 1 },
    {
      field: 'action',
      headerName: 'Action',
      minWidth: 350,
      flex: 1,
      renderCell: ({ row }) => <div className="flex whitespace-normal">{row.action}</div>,
    },
  ];

  useEffect(() => {
    if (isLoading) toast.loading('Loading...', { id: 'promiseLogs' });
    if (isError) toast.error('Error while getting the data!', { id: 'promiseLogs' });
    if (isSuccess) toast.success('Got the data successfully!', { id: 'promiseLogs' });
  }, [isLoading, isError, isSuccess]);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex justify-between mb-5">
          <div className="flex flex-col items-start gap-1">
            <h2 className="font-bold text-2xl xl:text-4xl text-base-content dark:text-neutral-200">
              Logs
            </h2>
            {data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} Logs Found
              </span>
            )}
          </div>
        </div>

        <DataTable
          slug="logs"
          columns={columns}
          rows={isSuccess ? data : []}
          includeActionColumn={false}
        />

        {isError && (
          <div className="w-full flex justify-center text-error">
            Error while getting the data!
          </div>
        )}
      </div>
    </div>
  );
};

export default Logs;
