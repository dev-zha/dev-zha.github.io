import { useEffect } from 'react';

export default function useScrollToHash() {
  useEffect(() => {
    const hash = document.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);
}
