export const APP_URL = process.env.APP_URL as string

export const PUBLIC_URL = {
	root: (url = '') => `${url ? url : ''}`,

	home: () => PUBLIC_URL.root('/'),
	auth: () => PUBLIC_URL.root('/auth'),
	posts: (query = '') => PUBLIC_URL.root(`/posts${query}`),

	post: (id = '') => PUBLIC_URL.root(`/posts${id}`),


}

export const DASHBOARD_URL = {
	root: (url = '') => `dashboard${url ? url : ''}`,

	home: () => DASHBOARD_URL.root('/'),

	favorites: () => DASHBOARD_URL.root('/favorites'),
}