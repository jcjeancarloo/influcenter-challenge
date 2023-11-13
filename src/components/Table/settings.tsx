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

export const userTable = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstname', headerName: 'Nome', width: 200 },
  { field: 'lastname', headerName: 'Sobrenome', width: 200 },
  { field: 'email', headerName: 'E-mail', width: 200 },
  { field: 'username', headerName: 'Login', width: 200 },
  { field: 'phone', headerName: 'Telefone', width: 200 },
]

export const productTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Nome', width: 300 },
  { field: 'price', headerName: 'Preço', width: 150 },
  { field: 'category', headerName: 'Categoria', width: 200 },
  { field: 'description', headerName: 'Descrição', width: 400, sortable: false },
]
