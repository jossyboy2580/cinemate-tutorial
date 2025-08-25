import {useEffect} from 'react';

export default function useUpdatePageTitle(title) {
  useEffect(() => {
    document.title = `${title} - Cinemate`;
  });

  return null;
}
