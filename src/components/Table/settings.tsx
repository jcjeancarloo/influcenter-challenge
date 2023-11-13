export const style = {
  color: 'white',
  border: 'none',
  '& .MuiSvgIcon-root': {
    color: 'white',
  },
  '& .MuiTablePagination-root': {
    color: '#777883',
  },
  '& .MuiDataGrid-footerContainer': {
    border: 'none',
    marginTop: '10px',
  },
  '& ::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
  },
  '& ::-webkit-scrollbar-track': {
    backgroundColor: '#333646',
  },
  '& ::-webkit-scrollbar-thumb': {
    borderRadius: '10px',
    boxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
    backgroundColor: '#44a5ff',
  },

  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 'bold',
  },
  '& .MuiDataGrid-columnSeparator': { display: 'none' },
  '& .MuiDataGrid-columnHeaders': {
    borderBottom: '1px solid #333646',
    fontWeight: 'bold',
  },

  '& .MuiDataGrid-cell': {
    borderBottom: '1px  solid #333646',
  },
}
