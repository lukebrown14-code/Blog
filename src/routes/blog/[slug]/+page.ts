import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (params.slug === 'hello-world') {
		return {
			title: 'hello',
			content: 'Weclome to the page'
		};
	}

	error(404, 'page not found');
};
