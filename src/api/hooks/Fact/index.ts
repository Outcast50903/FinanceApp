import {useQuery, useQueryClient} from '@tanstack/react-query';
import AxiosHttpClient from '../../../utils/api';
import {FactResponse} from '../../types';

const API = new AxiosHttpClient(process.env.API_URL ?? '');

const useQueryFact = () => {
  const queryClient = useQueryClient();

  const factQuery = useQuery(['fact'], () => API.get<FactResponse>('fact'), {
    onSuccess(data) {
      return data;
    },
    onError() {
      queryClient.setQueryData(['fact'], null);

      return null;
    },
  });

  return {
    factQuery,
  };
};

export default useQueryFact;
