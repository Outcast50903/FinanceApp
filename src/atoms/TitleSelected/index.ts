import {atom} from 'jotai';

export const titleSelectedAtom = atom<string | null>(null);

export const handleTitleSelectedAtom = atom(
  null,
  (_, set, value: string | null) => set(titleSelectedAtom, value),
);
