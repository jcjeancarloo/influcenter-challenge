import { DataGrid } from '@mui/x-data-grid'
import { productTable, style, userTable } from './settings'

type TableProps = {
  data: any[]
  isUserTable: boolean
}

const Table = ({ data, isUserTable }: TableProps) => {
  return (
    <DataGrid
      rows={data}
      columns={isUserTable ? userTable : productTable}
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
      sx={style}
    />
  )
}

export default Table
