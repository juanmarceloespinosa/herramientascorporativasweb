import nodemailer from 'nodemailer';
import { contactSchema, emptyContact } from '$lib/models/core';
import { formDataToObject } from '$lib/utils/fetch';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { EMAIL_FROM, EMAIL_PASS, EMAIL_RECV, EMAIL_SMTP, EMAIL_USER } from '$env/static/private';

const transporter = nodemailer.createTransport({
	host: EMAIL_SMTP,
	port: 587,
	auth: {
		user: EMAIL_USER,
		pass: EMAIL_PASS
	}
});

export const actions: Actions = {
	contact: async ({ request }) => {
		const formData = await request.formData();
		const data = formDataToObject(formData);
		const [body, errors] = contactSchema.fromObject(data);
		if (errors) {
			console.log({ data, body, errors });
			return fail(400, { errors });
		}
		const now = new Date();
		const response = await transporter.sendMail({
			from: EMAIL_FROM,
			to: EMAIL_RECV,
			subject: body.subject ?? 'Contacto de Herramientas Administrativas',
			text: [
				`Created At: ${now.toISOString()}`,
				`Nombre: ${body.name}`,
				`Correo Electrónico: ${body.email}`,
				`Teléfono: ${body.phone}`,
				`Producto/Servicio: ${body.service}`,
				`Presupuesto: ${body.budget || 0}`,
				'Mensaje:',
				body.message || ''
			].join('\n')
		});
		console.log('Mail Response', response);
		return { success: true, contact: { ...emptyContact() } };
	}
};
