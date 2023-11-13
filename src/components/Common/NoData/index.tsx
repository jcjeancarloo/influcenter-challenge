import { useTranslation } from 'react-i18next'

const NoData = () => {
  const { t } = useTranslation()
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <span>{t('common.noData')}</span>
    </div>
  )
}

export default NoData
