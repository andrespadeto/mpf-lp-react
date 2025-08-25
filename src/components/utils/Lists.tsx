import Check from '@/assets/check.svg';

type ListItemsProps = {
  line: string;
};

export function ListItems({ line }: ListItemsProps) {
  return (
    <li className='flex gap-2'> <img src={Check}/> {line}</li>
  );
}