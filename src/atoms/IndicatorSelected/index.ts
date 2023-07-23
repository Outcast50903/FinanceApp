import {atom} from 'jotai';

export const indicatorSelectedAtom = atom<string | null>(null);

export const handleIndicatorSelectedAtom = atom(
  null,
  (_, set, value: string | null) => set(indicatorSelectedAtom, value),
);
