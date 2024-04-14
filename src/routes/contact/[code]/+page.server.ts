import { CONTACT_KEY, RECAPTCHA_KEY } from '$env/static/private';
import { redirect, type RequestHandler } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { redisRepository } from '$lib/server/redis';
import { formDataToObject } from '$lib/utils/fetch';
import type { Contact } from '$lib/models/core';

export const load: PageServerLoad = async ({ params }) => {
	const code = params.code;
	if (code != CONTACT_KEY) redirect(303, '/contact');
	const contacts = await redisRepository.getContacts();
	return {
		contacts
	};
};
