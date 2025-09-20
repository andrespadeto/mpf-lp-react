import { CardForWho } from "@/components/utils/Cards";
export const ForWho = () => {
    return(
        <section className="max-w-full flex justify-center pt-18 mt-10">
            <div className='text-center mb-16'>
                <h3 className='text-4xl font-bold mb-1'>Para quem é</h3>
                <h2>O <span className="h2-b">Meu Planner Financeiro</span> é ideal para você que:</h2>
                <div className="flex gap-4 justify-center mt-14">
                    {
                        [
                            "Deseja acabar com a ansiedade de olhar o extrato bancário",
                            "Quer dormir tranquilo sabendo que todas as contas estão em dia",
                            "Deseja fazer a viagem dos sonhos",
                            "Deseja transformar seus sonhos em metas mensais realizáveis",
                            "Quer ter o controle da própria vida"

                        ].map( (line,id) => (
                            <CardForWho key={id} CardId={id+1} description={line}/>
                        ))                        
                    }
                    
                </div>
                <div className="rounded-2xl bg-[#f5e9ca] p-6">
                    <span className="text-[16px]">Se você se identifica com as situações acima e já baixou vários apps,
                        criou planilhas, mas nunca conseguiu manter a consistência na organização
                        financeira, o Meu Planner Financeiro foi desenvolvido especialmente para você!</span>
                </div>
            </div> 
        </section>  
    )
}