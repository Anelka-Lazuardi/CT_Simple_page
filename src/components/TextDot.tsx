import { motion } from 'framer-motion';

type Props = {
  number: string;
  name: string;
};

function TextDot({ number, name }: Props) {
  return (
    <div className="flex relative">
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', duration: 1.5 }}
      >
        <h1 className="oswald text-11xl font-bold text-[#414f6b]">{number}</h1>
      </motion.div>
      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', duration: 2.5 }}
        className="relative"
      >
        <h1 className="text-5xl text-[#414f6b] font-bold absolute bottom-[4.5rem] -left-5 uppercase">
          {name}
        </h1>
      </motion.div>
    </div>
  );
}

export default TextDot;
