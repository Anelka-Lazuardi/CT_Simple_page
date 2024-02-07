'use client';
import Image from 'next/image';
import { useEffect } from 'react';

type Props = {
  finishLoading: () => void;
};

const SplashScreen = ({ finishLoading }: Props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      finishLoading();
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-aiesec-blue">
      <Image
        src={'/img/logo.png'}
        alt="logo"
        width={50}
        height={50}
        className="mix-blend-multiply outline outline-slate-200 rounded-full animate-bounce"
      />
    </div>
  );
};

export default SplashScreen;
