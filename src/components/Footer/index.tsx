import { useTranslation } from 'react-i18next'
const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="w-full text-center pb-4">
      <small className="text-gray-500">{t('footer')}</small>
    </footer>
  )
}

export default Footer
