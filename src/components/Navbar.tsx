
import logo from '../assets/logo.svg';
import { Button1, Button2 } from './utils/Button';

export default function Navbar() {
  return (
    <nav className="sticky top-0 py-6 w-[1100px] mx-auto bg-auto">
        <div className="container  mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div>
                    <img src={logo} alt="logo" className='w-[140px]' />
                </div>
                <div className="space-x-4">
                    <Button2 href="https://web.meuplannerfinanceiro.com.br/login" >Entrar</Button2>
                    <Button1 href="#">Assinar agora</Button1>
                </div>
            </div>
        </div>
    </nav>
  );
}