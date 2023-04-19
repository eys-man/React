import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RMCardData, RMCardsData } from '../../Types/Types';

const baseUrl = 'https://rickandmortyapi.com/api/';

export const rmApi = createApi({
  reducerPath: 'rmApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getCardsBySearchQuery: builder.query<RMCardsData, string>({
      query: (name) => `character/?name=${name}`,
    }),
    getCardById: builder.query<RMCardData, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetCardsBySearchQueryQuery, useGetCardByIdQuery } = rmApi;
