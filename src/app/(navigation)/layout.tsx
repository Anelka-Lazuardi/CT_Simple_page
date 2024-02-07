'use client';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SplashScreen from '@/components/SplashScreen';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);
  if (isLoading && isHome) {
    return <SplashScreen finishLoading={() => setIsLoading(false)} />;
  }
  return (
    <>
      <main className="overflow-hidden ">{children}</main>
      <ScrollToTopButton />
    </>
  );
}
