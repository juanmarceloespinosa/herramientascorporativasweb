import { contactSchema, emptyContact, type ContactToken } from '$lib/models/core';
import { redisRepository } from '$lib/server/redis';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { RECAPTCHA_SCORE, RECAPTCHA_SECRET, RECAPTCHA_VERIFY_URL } from '$env/static/private';

export const POST: RequestHandler = async ({ request, fetch }) => {
	const data = await request.json();
	const [body, errors] = contactSchema.fromObject(data);
	if (errors) {
		console.log({ data, body, errors });
		return error(400, 'Bad Request');
	}
	const token = (data as ContactToken).token;
	const searchOpt = {
		secret: RECAPTCHA_SECRET,
		response: token
	};
	const search = new URLSearchParams(searchOpt);
	const response = await fetch(`${RECAPTCHA_VERIFY_URL}?${search.toString()}`, {
		method: 'POST'
	});
	const verify = await response.json();
	if (!verify.success) {
		return error(400, 'Verify Error');
	}
	const score = +verify.score;
	const minScore = +RECAPTCHA_SCORE;
	if (score < minScore) {
		return error(400, `Score ${score} not enough. Possible a robot`);
	}
	const contact = await redisRepository.addContact(body);
	return json({ success: true, contact: { ...emptyContact() }, inserted: contact });
};
