import React from 'react';
import Image from 'next/image';
import TextLogo from '../TextLogo';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="w-full bg-[#404e6c] relative   ">
      <div
        className={cn(
          'container flex flex-col gap-5 items-center justify-between py-3',
          'md:gap-0 md:flex-row'
        )}
      >
        <motion.div
          className="flex gap-4 items-center justify-center w-1/2 md:justify-start "
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1.5 }}
        >
          <Image
            src={'/img/logo.png'}
            alt="logo"
            width={50}
            height={50}
            className="mix-blend-multiply outline outline-slate-200 rounded-full"
          />

          <TextLogo
            firstClass={'text-[#63769d]'}
            secondClass={'text-[#63769d]'}
          />
        </motion.div>

        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1.5 }}
        >
          <p className={cn('lato text-[#63769d] text-center ')}>
            COPYRIGHT 2016. ALL RIGHTS RESERVED.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
