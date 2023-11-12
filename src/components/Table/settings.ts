export const style = {
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
}

export const userTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstname', headerName: 'Nome', width: 130 },
  { field: 'lastname', headerName: 'Sobrenome', width: 130 },
  { field: 'email', headerName: 'E-mail', width: 130 },
]

export const productTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Nome', width: 130 },
  { field: 'price', headerName: 'Preço', width: 130 },
  { field: 'category', headerName: 'Categoria', width: 130 },
  { field: 'description', headerName: 'Descrição', width: 130 },
  { field: 'image', headerName: 'Foto', width: 130 },
]
