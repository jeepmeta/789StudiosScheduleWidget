import { useEffect, useState } from 'react';

// Placeholder: later we’ll refine EST handling and slot logic.
export function useCurrentESTTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return now;
}
