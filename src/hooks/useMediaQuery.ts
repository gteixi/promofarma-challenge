import { useEffect, useState } from 'react';

/**
 * Custom React hook to track whether a given CSS media query matches the current screen.
 * It listens for changes in screen size and updates the state accordingly.
 * Useful for responsive design in React components.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}
