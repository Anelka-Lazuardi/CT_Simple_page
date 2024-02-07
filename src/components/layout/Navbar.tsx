'use client';
import { useSticky } from '@/hooks/useSticky';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { RefObject } from 'react';
import Nav from '../Nav';
import NavMobile from '../NavMobile';
import TextLogo from '../TextLogo';

type Props = {
  active: number;
  listRef: RefObject<HTMLDivElement>[];
};

const fixNav = 'absolute top-5 left-0 z-10 text-white';
const stickyNav =
  'fixed top-0 left-0 z-50 bg-white text-primary bg-opacity-80 backdrop-blur-sm shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.1)]';

const Navbar = ({ active, listRef }: Props) => {
  const isSticky = useSticky();

  const handleClik = (id: number) => () => {
    if (listRef[id]) {
      listRef[id].current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(`w-full`, isSticky ? stickyNav : fixNav)}>
      <div className="container    flex justify-between items-center py-3 ">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', duration: 1.5 }}
          className="flex gap-4 items-center w-full"
        >
          <Image
            src={'/img/logo.png'}
            alt="logo"
            width={50}
            height={50}
            draggable={false}
          />
          {isSticky && <TextLogo />}
        </motion.div>

        <motion.div
          className="lg:hidden relative w-full"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', duration: 1.5 }}
        >
          <NavMobile
            isSticky={isSticky}
            handleClik={handleClik}
            active={active}
          />
        </motion.div>
        <motion.div
          className="hidden lg:block"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', duration: 1.5 }}
        >
          <Nav isSticky={isSticky} handleClik={handleClik} active={active} />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
