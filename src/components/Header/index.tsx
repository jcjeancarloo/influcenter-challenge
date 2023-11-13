import InflucenterLogo from '@assets/influcenter-challenge-logo-3.png'
import UserPlaceholder from '@assets/user-placeholder.png'

const Header = () => {
  return (
    <header className="w-full flex flex-row items-center pt-8 -mb-2">
      <div className="w-[55%] flex flex-row justify-end">
        <img src={InflucenterLogo} className="w-[250px]" />
      </div>
      <div className="w-[45%] flex flex-row items-center justify-end gap-x-2">
        <img src={UserPlaceholder} className="w-[40px]" />
        <div className="flex flex-row md:gap-x-8 gap-x-4">
          <span className="text-white font-semibold cursor-default">John Doe</span>
          <span className="text-gray-500 font-semibold hover:text-gray-200 cursor-pointer transition">
            Sair
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
