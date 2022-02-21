import { createContext } from 'react';

export const AppContext = createContext<{
  setQuery: Function;
}>({
  setQuery: () => {},
});
