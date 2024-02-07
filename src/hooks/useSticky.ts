import { useEffect, useState } from 'react';

export const useSticky = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 500 ? setIsSticky(true) : setIsSticky(false);
      }
    };
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  return isSticky;
};
