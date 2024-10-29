import './index.css';
import logo from './assets/logo.svg';

export default function App() {
  return (
    <header className="w-full bg-white my-1 mx-1 flex justify-around">
      <img src={logo} className="items-start max-w-40"/>
      <a href="https://www.institutoponte.org.br" className="">Home</a>
    </header>
  )
}