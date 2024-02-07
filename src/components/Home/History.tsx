import Image from 'next/image';
import { RefObject } from 'react';
import Carousel from '../Carousel';
import TextDot from '../TextDot';
import { motion } from 'framer-motion';

type Props = {
  kref: RefObject<HTMLDivElement>;
};

const History = ({ kref }: Props) => {
  return (
    <section className="w-full h-screen  relative flex flex-col  " ref={kref}>
      <Image
        alt="background-image"
        src={`/img/peak.png`}
        fill
        className="object-cover object-left-top hue-rotate-[22deg]  "
      />
      <div className="container oswald relative w-full">
        <TextDot name="history" number="01." />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1.5 }}
        >
          <p className="oswald max-w-5xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            voluptatum nulla reprehenderit, non incidunt quae cupiditate
            voluptatibus magnam, commodi, officia dolor hic accusamus quidem
            ullam ad molestiae repudiandae iure aut!
          </p>
        </motion.div>
      </div>

      <div className="absolute bg-[#3d4960] bottom-0 w-full hue-rotate-0 bg-opacity-75">
        <motion.div
          className="container w-full py-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 2.5 }}
        >
          <Carousel />
        </motion.div>
      </div>
    </section>
  );
};

export default History;
