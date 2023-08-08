import {useQuery} from '@tanstack/react-query';
import {queryClient} from 'api/queryClient';
import {IndicatorListResponse} from 'api/types';
import {indicatorSelectedAtom} from 'atoms';
import dayjs from 'dayjs';
import {useAtomValue} from 'jotai';
import AxiosHttpClient from 'utils/api';
import {IsEmptyValue} from 'utils/validations';

const API = new AxiosHttpClient(process.env.API_URL ?? '');

const useQueryHistory = () => {
  const indicatorSelected: string | null = useAtomValue(indicatorSelectedAtom);
  const lastMonth = dayjs().subtract(30, 'day').month() + 1;
  const month = dayjs().month() + 1;
  const year = dayjs().subtract(30, 'day').year();

  const historyQuery = useQuery(
    ['history'],
    () =>
      API.get<IndicatorListResponse>(
        `${indicatorSelected}/periodo/${year}/${lastMonth}/${year}/${month}?apikey=${process.env.API_KEY}&formato=json`,
      ),
    {
      enabled:
        !IsEmptyValue(indicatorSelected) &&
        !IsEmptyValue(year) &&
        !IsEmptyValue(lastMonth),
      onSuccess(data) {
        const values = Object.values(data)[0];

        if (values.length === 1) {
          return data;
        }

        values.sort(
          (a, b) => (b.Fecha > a.Fecha && 1) || (b.Fecha < a.Fecha && -1) || 0,
        );

        return data;
      },
      onError() {
        queryClient.setQueryData(['history'], null);

        return null;
      },
    },
  );

  return {
    historyQuery,
  };
};

export default useQueryHistory;
