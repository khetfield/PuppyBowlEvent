import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/';

export const puppyBowlApi = createApi({
  reducerPath: 'puppyBowlApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => 'players',
    }),
  }),
});

export const { useGetPlayersQuery } = puppyBowlApi;
