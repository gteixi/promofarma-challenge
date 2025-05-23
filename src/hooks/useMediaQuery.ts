import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Escucha si la media query se cumple o no (por ejemplo: max-width: 768px)
    const media = window.matchMedia(query);

    // Si el valor actual de media.matches es diferente al estado actual, lo actualizamos
    if (media.matches !== matches) setMatches(media.matches);

    // Creamos una función que se ejecutará cada vez que el tamaño de la ventana cambie
    const listener = () => setMatches(media.matches);

    // Añadimos un "oyente" que se activa cuando el resultado de la media query cambia (ej: al cambiar el tamaño de la pantalla)
    media.addEventListener('change', listener);

    // Cuando el componente se desmonte (se quite de la pantalla), eliminamos el oyente para evitar fugas de memoria
    return () => media.removeEventListener('change', listener);

    // Este efecto se ejecuta cada vez que cambian 'matches' o 'query'
  }, [matches, query]);

  // Devolvemos el resultado: true o false dependiendo si se cumple la media query o no
  return matches;
}
