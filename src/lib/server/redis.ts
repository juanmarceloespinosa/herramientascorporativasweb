import { REDIS_PREFIX, REDIS_URL } from '$env/static/private';
import type { Contact, ContactInsert } from '$lib/models/core';
import { createClient } from 'redis';

const redis = createClient({
	url: REDIS_URL || ''
});

await redis.connect();

export class RedisRepository {
	async getContacts() {
		const keys = await redis.keys(`${REDIS_PREFIX}_contact_*`);
		const contacts: Contact[] = [];
		for (let key of keys) {
			const value = await redis.get(key);
			contacts.push(JSON.parse(value!!));
		}
		return contacts;
	}
	async addContact(data: ContactInsert) {
		const id = +new Date();
		const key = `${REDIS_PREFIX}_contact_${id}`;
		const contact: Contact = {
			...data,
			id,
			created_at: new Date(),
			updated_at: new Date()
		};
		await redis.set(key, JSON.stringify(contact));
		return contact;
	}
	async delContact(id: number) {
		const key = `${REDIS_PREFIX}_contact_${id}`;
		const str = await redis.get(key);
		if (!str) return;
		await redis.del(key);
	}
}

export const redisRepository = new RedisRepository();
