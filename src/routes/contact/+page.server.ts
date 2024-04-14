import { RECAPTCHA_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		reCaptchaKey: RECAPTCHA_KEY
	};
};
