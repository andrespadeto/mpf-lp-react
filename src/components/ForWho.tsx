import { CardForWho } from "./utils/Cards"
export const ForWho = () => {
    return(
        <>
            <section className="max-w-full flex justify-center pt-18 pb-20 mt-10">
                <div className='text-center'>
                    <h3 className='text-4xl font-bold mb-1'>Para quem é</h3>
                    <h2>O <span className="h2-b">Meu Planner Financeiro</span> é ideal para você que:</h2>
                    <div className="flex gap-6 justify-center mt-14">
                        {
                            ["1","2","3","4","5"].map( id => (
                                <CardForWho key={id} CardId={id} description={`Deseja acabar com a ansiedade de olhar o extrato bancário`}/>
                            ))                        
                        }
                        
                    </div>
                </div> 
            </section>  
        </>
    )
}