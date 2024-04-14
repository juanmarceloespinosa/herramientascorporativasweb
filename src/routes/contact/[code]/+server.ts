import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Contact } from '$lib/models/core';
import { redisRepository } from '$lib/server/redis';

export const DELETE: RequestHandler = async ({ request }) => {
	const contact: Contact = await request.json();
	await redisRepository.delContact(+contact.id);
	const contacts = await redisRepository.getContacts();
	return json({
		contacts
	});
};
