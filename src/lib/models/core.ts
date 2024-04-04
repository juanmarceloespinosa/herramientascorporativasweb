import { Schema, valBoolean, valNumber, valString } from '$lib/svelma/utils/validation';

export type Contact = {
	id: number;
	created_at?: Date;
	updated_at?: Date;
	name: string;
	email: string;
	phone: string;
	subject: string;
	service: string;
	budget: number;
	message: string;
	closed: boolean;
	username: string;
};

export type ContactInsert = Omit<Contact, 'id' | 'created_at' | 'updated_at'>;
export type ContactUpdate = Pick<Contact, 'id' | 'closed' | 'username'>;

export const contactSchemaDef = {
	id: valNumber('Id').min(1),
	name: valString('Su Nombre (requerido)').required().maxlength(255),
	email: valString('Su Correo Electrónico (requerido)').required().email().maxlength(255),
	phone: valString('Su Teléfono').maxlength(255),
	subject: valString('Asunto').maxlength(255),
	service: valString('Producto/Servicio').maxlength(255),
	budget: valNumber('Presupuesto Estimado ($us.)'),
	message: valString('Su mensaje').maxlength(1000),
	closed: valBoolean('Cerrado').required(),
	username: valString('Usuario').maxlength(255)
};

export const contactSchema = new Schema<Contact, typeof contactSchemaDef>(contactSchemaDef);

export function emptyContact(): Contact {
	return {
		id: 0,
		created_at: new Date(),
		updated_at: new Date(),
		name: '',
		email: '',
		phone: '',
		subject: '',
		service: '',
		budget: 0,
		message: '',
		closed: false,
		username: ''
	};
}

export const errorLoginMessage = 'Usuario y/o contraseña no válidos';
export const errorForgotMessage =
	'No tiene contraseña vigente. Siga el procedimiento de olvidé mi contraseña.';
