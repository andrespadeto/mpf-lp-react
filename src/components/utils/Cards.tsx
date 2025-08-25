import ForWho1 from '@/assets/ForWho1.svg';
import ForWho2 from '@/assets/ForWho2.svg';
import ForWho3 from '@/assets/ForWho3.svg';
import ForWho4 from '@/assets/ForWho4.svg';
import ForWho5 from '@/assets/ForWho5.svg';

const images: { [key: string]: string } = {
  "1": ForWho1,
  "2": ForWho2,
  "3": ForWho3,
  "4": ForWho4,
  "5": ForWho5,
};

export function CardForWho({ CardId, description }: { CardId: string, description: string }) {
    return (
        <div className="w-[200px] h-[300px] p-2 flex flex-col items-center text-center">
            <img src={images[CardId]} alt={`Card ${CardId}`} className="w-20 h-20 mb-4"/>
            <p style={{fontSize: '14px'}}>{description}</p>
        </div>
    );
}