import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, url }) => {
	let issue = url.searchParams.get('issue');
	if (issue === null) {
		issue = 'sirius-black';
		// write it in the url
		url.searchParams.set('issue', issue);
	}
	return { issue };
};
