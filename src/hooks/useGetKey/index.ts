import {useAtomValue} from 'jotai';
import {indicatorSelectedAtom} from '../../atoms';

const useGetKey = () => {
  const indicatorSelected = useAtomValue(indicatorSelectedAtom);
  const getKey: {[key: string]: string} = {
    dolar: 'Dolares',
    euro: 'Euros',
    ipc: 'IPCs',
    tip: 'TIPs',
    tmc: 'TMCs',
    uf: 'UFs',
    utm: 'UTMs',
    default: '',
  };

  return (indicatorSelected && getKey[indicatorSelected]) || getKey.default;
};

export default useGetKey;
