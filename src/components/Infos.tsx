import ImageProduct1 from '@/assets/product1.webp';
import { ListItems } from '@/components/utils/Lists';

export const Infos = () => {
    return(
        <>
            <section className="max-w-full flex justify-center mt-5">
                <div className='text-center'>
                    <h2>O caminho para a sua <span className="h2-b">organização e tranquilidade financeira</span> começa aqui</h2>
                    <div className='flex justify-center my-6'>
                        <img className='w-[700px]' src={ImageProduct1} alt="product1" />
                    </div>
                    <h2 className='mt-[120px]'>A única ferramenta capaz de tornar a organização financeira em um <span className="h2-b">hábito prazeroso</span></h2>
                    <div className="flex gap-6 justify-center mt-14">
                    <div className='flex w-[1100px]'>
                        <div className='w-1/2'>
                            
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
            </section>  
        </>
    )
}