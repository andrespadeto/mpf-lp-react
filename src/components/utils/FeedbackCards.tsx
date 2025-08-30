import Feedback1 from '@/assets/Feedback_1.webp'
import Feedback2 from '@/assets/Feedback_2.webp'
import Feedback3 from '@/assets/Feedback_3.webp'
import Feedback4 from '@/assets/Feedback_4.webp'


const images: { [key: string]: string } = {
  "1": Feedback1,
  "2": Feedback2,
  "3": Feedback3,
  "4": Feedback4,
};

export function FeedbackCards({FdbkId}: {FdbkId: number}) {
    return (
        <div className="w-[300px] pl-[3px] pr-[3px] flex flex-col items-center text-center">
            <img src={images[FdbkId]} alt={`Fdbk${FdbkId}`}/>

        </div>
    )
}