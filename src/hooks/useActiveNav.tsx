import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from './useInterSectionObserver';

export const useActiveNav = () => {
  const [activeNav, setActiveNav] = useState<number>(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const isVisibleHero = useIntersectionObserver(heroRef, {
    threshold: 0.5,
  });
  const isVisibleHistory = useIntersectionObserver(historyRef, {
    threshold: 0.5,
  });
  const isVisibleTeam = useIntersectionObserver(teamRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisibleHero) setActiveNav(0);
    if (isVisibleHistory) setActiveNav(1);
    if (isVisibleTeam) setActiveNav(2);
  }, [isVisibleHistory, isVisibleTeam]);

  return {
    active: activeNav,
    teamRef,
    historyRef,
    heroRef,
  };
};
