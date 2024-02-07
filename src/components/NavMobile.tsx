'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

type Props = {
  isSticky: boolean;
  active: number;
  handleClik: (index: number) => () => void;
};
const navData = [
  { label: '01.HISTORY', id: 'history' },
  { label: '02.TEAM', id: 'team' },
];
const NavMobile = ({ isSticky, active, handleClik }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClickCLose = (index: number) => () => {
    handleClik(index)();
    setOpen(false);
  };
  return (
    <div className="cursor-pointer relative  items-center px-4 ">
      <button
        id="hamburger"
        type="button"
        className={cn(
          'block absolute top-1/2 -translate-y-1/2 right-4',
          open && 'hamburger-active'
        )}
        onClick={() => setOpen(!open)}
      >
        <span
          className={cn(
            'harburger-line origin-top-left transition duration-300 ease-in-out',
            isSticky ? 'bg-primary' : 'bg-white'
          )}
        />
        <span
          className={cn(
            'harburger-line transition duration-300 ease-in-out',
            isSticky ? 'bg-primary' : 'bg-white'
          )}
        />
        <span
          className={cn(
            'harburger-line origin-bottom-left transition duration-300 ease-in-out',
            isSticky ? 'bg-primary' : 'bg-white'
          )}
        />
      </button>
      <div
        className={cn(
          'bg-white rounded-lg text-xl font-extrabold text-primary p-5 text-start ',
          open
            ? 'absolute right-4 top-10   rounded-lg drop-shadow-xl'
            : 'hidden'
        )}
      >
        {navData.map((data, index) => (
          <div className="group flex flex-col gap-2" key={index}>
            <button
              onClick={handleClickCLose(index)}
              className="text-start text-lg"
            >
              {data.label}
            </button>
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
    </div>
  );
};

export default NavMobile;
