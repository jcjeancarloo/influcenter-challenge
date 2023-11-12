import { DataGrid, GridColDef } from '@mui/x-data-grid'

type TableProps = {
  data: any[]
  headers?: string[]
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstname', headerName: 'Nome', width: 130 },
  { field: 'lastname', headerName: 'Sobrenome', width: 130 },
  { field: 'email', headerName: 'E-mail', width: 130 },
]

const Table = ({ data, headers }: TableProps) => {
  return (
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      showCellVerticalBorder={false}
      disableVirtualization
      disableColumnMenu
      disableColumnSelector
      disableColumnFilter
      disableRowSelectionOnClick
      pageSizeOptions={[5, 10]}
      sx={{
        color: 'white',
        '& .MuiSvgIcon-root': {
          color: '#64748b',
        },
        '& .MuiTablePagination-root': {
          color: '#64748b',
        },
        '& ::-webkit-scrollbar': {
          width: '6px',
        },
        '& ::-webkit-scrollbar-track': {
          backgroundColor: '#f5f5f5',
        },
        '& ::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          boxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
          backgroundColor: '#d40e0e',
        },
        '& .MuiDataGrid-columnSeparator': { display: 'none' },
      }}
    />
  )
}

export default Table
