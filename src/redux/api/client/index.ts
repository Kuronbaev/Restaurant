import { api as index } from '..'

const api = index.injectEndpoints({
	endpoints: build => ({
		getMenu: build.query<MENU.GetResponse, MENU.GetRequest>({
			query: () => ({
				url: '/extras',
				method: 'GET',
			}),
			providesTags: ['menu'],
		}),
	}),
})
export const { useGetMenuQuery } = api
