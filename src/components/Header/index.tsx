import InflucenterLogo from '@assets/influcenter-challenge-logo-3.png'
import UserPlaceholder from '@assets/user-placeholder.png'
import { BR, US } from 'country-flag-icons/react/3x2'

import i18n from '@i18n/index'

const Header = () => {
  const handleLanguage = () => {
    if (i18n.language === 'pt-BR') {
      i18n.changeLanguage('en-US')
    } else {
      i18n.changeLanguage('pt-BR')
    }
  }

  const Language = () => {
    return i18n.language === 'pt-BR' ? (
      <>
        <BR className="w-[20px]" />
        <span className="transition md:block hidden">Português</span>
      </>
    ) : (
      <>
        <US className="w-[20px]" />
        <span className="transition md:block hidden">English</span>
      </>
    )
  }

  return (
    <header className="w-full flex flex-row items-center pt-8 -mb-2">
      <div className="w-[55%] flex flex-row justify-end">
        <img src={InflucenterLogo} className="w-[250px]" />
      </div>
      <div className="w-[45%] flex flex-row items-center justify-end gap-x-8">
        <div className="flex flex-row items-center gap-x-4 w-[80%] justify-end">
          <div
            className="flex flex-row items-center gap-x-2 opacity-50 hover:opacity-100 cursor-pointer text-white transition"
            onClick={handleLanguage}
          >
            <Language />
          </div>

          <div className="flex md:flex-row flex-col justify-center items-center md:gap-x-4 gap-x-4 md:w-[150px] md:justify-end md:items-center pl-5 md:pl-0">
            <img src={UserPlaceholder} className="w-[40px]" />
            <span className="text-white font-semibold cursor-default mt-2 md:mt-0 ">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
