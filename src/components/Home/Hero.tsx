import Image from 'next/image';
import React, { RefObject } from 'react';
import TextLogo from '../TextLogo';
import { cn } from '@/lib/utils';
import { motion, useAnimate } from 'framer-motion';

type Props = {
  kref: RefObject<HTMLDivElement>;
};

const Hero = ({ kref }: Props) => {
  return (
    <section
      className="w-full relative h-screen   brightness-110 saturate-[0.8] "
      ref={kref}
    >
      <Image
        src={'/img/Langit.png'}
        alt="hero"
        fill
        className="object-cover "
        priority
      />
      <Image
        src={'/img/layer_hero.png'}
        alt="hero"
        fill
        className="object-cover opacity-20 mix-blend-lighten"
      />
      <div
        className={cn(
          'absolute  -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 ',
          'md:top-[47%] md:left-[48%]',
          'lg:left-[46%] lg:top-[45%]'
        )}
      >
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', duration: 1.5 }}
        >
          <TextLogo
            parentClass={cn(
              'text-7xl leading-[0.8] ',
              'md:text-9xl md:leading-[0.8]',
              'lg:text-14xl'
            )}
          />
        </motion.div>
      </div>
      <div className="absolute w-full h-full bottom-0">
        <Image
          src={'/img/raw_mountain.png'}
          alt="hero"
          fill
          className="object-cover "
          draggable={false}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
