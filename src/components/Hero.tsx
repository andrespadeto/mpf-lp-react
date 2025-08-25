import manLaptop from '../assets/man-laptop.webp'
import { Button1 } from './utils/Button'

export const Hero = () => {
  return (
    <>  
        <main className="max-w-full flex justify-between items-center pt-18">
            <div className='w-[560px]'>
                <h1 className='text-5xl font-bold mb-6 leading-tight'>Controle suas finanças em apenas 15 minutos por semana e <span className='h1-b'>tenha dinheiro</span> de sobra todo mês! Tudo de forma <span className='h1-b'>automatizada e simplificada</span>.</h1>
                <p className='text-lg mb-6'>Não importa quanto você ganha, com um bom planejamento e a <strong>ferramenta ideal</strong> é possível fazer sobrar dinheiro e investir no que realmente importa para você.</p>
                <Button1 href="#" className='btn1-mpf'>Quero ter tranquilidade financeira</Button1>
            </div>
            <div className='w-[540px] pl-10'>
                <img src={manLaptop} alt="man-laptop" />
            </div>
        </main>
    </>
  )
}