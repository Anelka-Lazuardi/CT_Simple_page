'use client';
import Climb from '@/components/Home/Climb';
import Hero from '@/components/Home/Hero';
import History from '@/components/Home/History';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useActiveNav } from '@/hooks/useActiveNav';

export default function Home() {
  const { active, teamRef, historyRef, heroRef } = useActiveNav();

  return (
    <main>
      <Navbar active={active} listRef={[historyRef, teamRef]} />
      <Hero kref={heroRef} />
      <History kref={historyRef} />
      <Climb kref={teamRef} />
      <Footer />
    </main>
  );
}
