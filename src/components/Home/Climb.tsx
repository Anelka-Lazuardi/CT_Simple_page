'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { RefObject, useState } from 'react';
import TextDot from '../TextDot';

type Props = {
  kref: RefObject<HTMLDivElement>;
};

const tabs = [0, 1];
const dataTab = [
  {
    image: 'tab1',
    schedule: [
      [
        { date: '25 Nov 2016', event: 'Vestibulum viverra' },
        { date: '28 Nov 2016', event: 'Vestibulum viverra' },
      ],
      [{ date: '18 Dec 2016', event: 'Vestibulum viverra' }],
      [{ date: '7 Jan 2017', event: 'Vestibulum viverra' }],
    ],
  },
  {
    image: 'tab2',
    schedule: [
      [{ date: '17 Nov 2016', event: 'Vestibulum viverra' }],
      ,
      [
        { date: '13 Dec 2016', event: 'Vestibulum viverra' },
        { date: '28 Dec 2016', event: 'Vestibulum viverra' },
      ],
      [{ date: '9 Feb 2017', event: 'Vestibulum viverra' }],
    ],
  },
];

const Climb = ({ kref }: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="w-full min-h-screen  relative flex flex-col" ref={kref}>
      <div
        className={cn(
          'container oswald flex flex-col items-center w-full ',
          'md:flex-row',
          'lg:gap-20',
          'xl:gap-0'
        )}
      >
        <div className="w-full lg:w-1/3">
          <TextDot name="Climb" number="02." />
        </div>
        <motion.div
          className="py-4 w-full"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1.5 }}
        >
          <p className="oswald">
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </motion.div>
      </div>
      <div className="w-full bg-[#414f6b] ">
        <div
          className={cn(
            'container flex oswald font-bold  gap-4 text-white items-center text-xl uppercase p-0',
            'md:text-4xl'
          )}
        >
          {tabs.map((tab, index) => (
            <div
              className={cn(
                `p-3 cursor-pointer w-full text-center md:w-fit`,
                activeTab == tab && 'bg-[#afb3bd] text-[#414f6b]'
              )}
              key={tab}
              onClick={() => setActiveTab(tab)}
            >
              <p>mountain {tab + 1}</p>
              <div className={cn('w-full h-[3px] bg-[#414f6b] mt-2')}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex-1 relative ">
        <Image
          alt="background-image"
          src={`/img/${dataTab[activeTab].image}.webp`}
          fill
          className={cn('object-cover ')}
          style={{ objectPosition: activeTab === 1 ? '0% 30%' : '' }}
        />
        <div className="container min-h-[450px] ">
          <div className="flex ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 2.5 }}
              className=" bg-white relative top-10   p-4 bg-opacity-50  px-4 md:px-12 md:top-36"
            >
              <h1 className="text-5xl uppercase bebas text-[#414f6b] mb-3">
                schedule
              </h1>
              {dataTab[activeTab].schedule.map((schedule, index) => (
                <div className="mb-4" key={index}>
                  {schedule?.map((item, index) => (
                    <div className="grid grid-cols-2 " key={index}>
                      <p>{item.date}</p>
                      <p>{item.event}</p>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Climb;
