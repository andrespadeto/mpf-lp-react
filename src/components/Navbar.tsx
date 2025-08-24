
import logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-70 py-3 w-[1100px] mx-auto bg-auto">
        <div className="container  mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div>
                    <img src={logo} alt="logo" className='w-30' />
                </div>
                <div className="space-x-4">
                    <a href="#" className='py-2 px-3 rounded-md btn2-mpf border'>Entrar</a>
                    <a href="#" className='py-2 px-3 rounded-md btn1-mpf'>
                        Assinar agora
                    </a>
                </div>
            </div>
        </div>
    </nav>
  );
}