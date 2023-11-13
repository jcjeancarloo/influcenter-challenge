import NoData from '@components/Common/NoData'
import i18n from '@i18n/index'
import { DataGrid, GridToolbar, enUS, ptBR } from '@mui/x-data-grid'
import { useTranslation } from 'react-i18next'
import Title from '../Common/Title'
import Upload from '../Common/Upload'
import { style } from './settings'

type TableProps = {
  data: any[]
  isUserTable: boolean
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Table = ({ data, isUserTable, handleUpload }: TableProps) => {
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

  const HeaderActions = ({ isUsers }: { isUsers: boolean }) => {
    const fromTranslate = isUsers ? t('overview.users') : t('overview.products')
    const formattedButtonName = `${t('common.add')} ${fromTranslate
      .charAt(0)
      .toLowerCase()}${fromTranslate.slice(1)}`
    return (
      <div className="flex flex-row w-full items-center pb-4">
        <div className="w-[50%]">
          <Title name={fromTranslate} />
        </div>
        <div className=" w-[50%] flex flex-row justify-end">
          <Upload description={formattedButtonName} handleUpload={handleUpload} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-4 h-full">
      <HeaderActions isUsers={isUserTable} />
      {data.length ? (
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
      ) : (
        <NoData />
      )}
    </div>
  )
}

export default Table
