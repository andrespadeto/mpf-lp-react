import ImageProduct1 from '@/assets/product1.webp';
import { ListItems } from '@/components/utils/Lists';
import Escadinha from '@/assets/escadinha.webp';
import Mulher from '@/assets/mulher.webp';
import Ondinha from '@/assets/ondinha.webp';
import { Button1 } from '@/components/utils/Button';

export const Infos = () => {
    return(
        <>
            <section className="max-w-full mt-5">
                <div className='text-center'>
                    <h2>O caminho para a sua <span className="h2-b">organização e tranquilidade financeira</span> começa aqui</h2>
                    <div className='flex justify-center my-6'>
                        <img className='w-[700px]' src={ImageProduct1} alt="product1" />
                    </div>
                    <h2 className='mt-[120px]'>A única ferramenta capaz de tornar a organização financeira em um <span className="h2-b">hábito prazeroso</span></h2>
                    <div className="flex gap-6 justify-center mt-14">
                        <div className='flex w-[1100px] mb-20'>
                            <div className='w-1/2 p-1'>
                                <div className='relative items-center w-full h-[350px] flex justify-center'>
                                    <img src={Escadinha} alt="escadinha" className='w-[400px]' />
                                    <div className='absolute h-full w-[120px]'>
                                        <img src={Mulher} alt="mulher" className='absolute mulher' />
                                        <img src={Ondinha} alt="ondinha" className='ondinha' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <ul className='space-y-3 text-left'>
                                    {
                                        [
                                            'Personalização de categorias de receitas e despesas',                                     
                                            'Planejamento orçamentário fixo e variável',
                                            'Registro prático de entradas e saídas',
                                            'Importação automática de extratos e faturas',
                                            'Criação de planos individuais',
                                            'Projeção do saldo geral para os próximos meses',
                                            'Registro e acompanhamento de investimentos',
                                            'Gráficos automatizados e intuitivos',
                                            'E muito mais!'
                                        ].map((line, id) => (
                                                <ListItems key={id} line={line} />
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>                    
                    </div>
                </div> 
                <div className='text-center mb-20'>
                    <Button1 href="#" className='btn1-mpf'>Quero ter controle do meu dinheiro</Button1>
                </div>
            </section>  
        </>
    )
}