import i18n from '@i18n/index'
import { DataGrid, GridToolbar, enUS, ptBR } from '@mui/x-data-grid'
import { useTranslation } from 'react-i18next'
import { style } from './settings'

type TableProps = {
  data: any[]
  isUserTable: boolean
}

const Table = ({ data, isUserTable }: TableProps) => {
  const { t } = useTranslation()
  const userTable = () => [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstname', headerName: `${t('table.user.firstname')}`, width: 200 },
    { field: 'lastname', headerName: `${t('table.user.lastname')}`, width: 200 },
    { field: 'email', headerName: `${t('table.user.email')}`, width: 200 },
    { field: 'username', headerName: `${t('table.user.login')}`, width: 200 },
    { field: 'phone', headerName: `${t('table.user.phone')}`, width: 200 },
  ]

  const productTable = () => [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: `${t('table.product.name')}`, width: 300 },
    { field: 'price', headerName: `${t('table.product.price')}`, width: 150 },
    { field: 'category', headerName: `${t('table.product.category')}`, width: 200 },
    {
      field: 'description',
      headerName: `${t('table.product.description')}`,
      width: 400,
      sortable: false,
    },
  ]

  const languageDataSetting =
    i18n.language === 'pt-BR'
      ? ptBR.components.MuiDataGrid.defaultProps.localeText
      : enUS.components.MuiDataGrid.defaultProps.localeText

  return (
    <DataGrid
      rows={data}
      columns={isUserTable ? userTable() : productTable()}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      showCellVerticalBorder={false}
      disableColumnMenu
      disableColumnSelector
      disableColumnFilter
      disableDensitySelector
      disableRowSelectionOnClick
      pageSizeOptions={[5, 10]}
      sx={style}
      localeText={languageDataSetting}
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          printOptions: { disableToolbarButton: true },
          csvOptions: { disableToolbarButton: true },
        },
      }}
    />
  )
}

export default Table
