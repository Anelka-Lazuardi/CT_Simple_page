import React from 'react';
import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

type Props = {
  firstClass?: ClassValue;
  secondClass?: ClassValue;
  parentClass?: ClassValue;
};
function TextLogo(props: Props) {
  const { firstClass, secondClass, parentClass } = props;
  return (
    <div
      className={cn(
        'bebas text-xl leading-[0.8]',
        'md:text-2xl md:leading-[0.8]',
        'lg:text-4xl lg:leading-[0.8]',
        parentClass
      )}
    >
      <h1 className={cn('text-[#4d4d4d]', firstClass)}>LOSANGELES</h1>
      <h1
        className={cn(
          ' text-transparent scale-x-110 origin-left bg-clip-text bg-gradient-to-b from-primary from-50% to-black to-70% ',
          secondClass
        )}
      >
        MOUNTAINS
      </h1>
    </div>
  );
}

export default TextLogo;
