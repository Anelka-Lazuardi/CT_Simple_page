import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  handleClik: (index: number) => () => void;
  isSticky: boolean;
  active: number;
};
const navData = [
  { label: '01.HISTORY', id: 'history' },
  { label: '02.TEAM', id: 'team' },
];

function Nav({ handleClik, isSticky, active }: Props) {
  return (
    <div className="flex gap-5 lato cursor-pointer">
      {navData.map((data, index) => (
        <div className="group flex flex-col gap-2" key={index}>
          <button onClick={handleClik(index)}>{data.label}</button>
          <div
            className={cn(
              'w-full h-[2px]  origin-left scale-x-0 group-hover:scale-x-100 duration-300 ease-in-out',
              isSticky ? 'bg-primary' : 'bg-white',
              active == index + 1 && 'scale-x-100'
            )}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default Nav;
