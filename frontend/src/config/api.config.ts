export const SERVER_URL = process.env.SERVER_URL as string

export const API_URL = {
	root: (url = '') => `${url ? url : ''}`,

	auth: (url = '') => API_URL.root(`auth${url}`),

	users: (url = '') => API_URL.root(`users${url}`),

	posts: (url = '') => API_URL.root(`posts${url}`),

	comments: (url = '') => API_URL.root(`comments${url}`),

	files: (url = '') => API_URL.root(`files${url}`)
}