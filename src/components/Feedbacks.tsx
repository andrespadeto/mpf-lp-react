import { FeedbackCards } from '@/components/utils/FeedbackCards'

export const Feedbacks = () => {
    return(
        <section className="max-w-full flex justify-center pt-18 mt-10">
            <div className='text-center'>
                <h3 className='text-4xl font-bold mb-1'>Feedbacks</h3>
                <h2>Olha o que dizeem nossos usuários:</h2>
                <div className="flex gap-1 justify-center mt-14">
                    {
                        [1,2,3,4].map( (id) => (
                            <FeedbackCards key={id} FdbkId={id} />
                        ))
                    }
                </div>
            </div>

        </section>
    )
}