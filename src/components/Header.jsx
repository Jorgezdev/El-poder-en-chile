
import { NavBar } from './NavBar'
import logo from '../assets/images/logo.svg'

export const Header = () => {
  return (
    <header className="bg-red-500 flex place-content-between items-center mb-8">
      <img src={logo} alt="logo"/> 
      <NavBar/>
    </header>
  )
}

