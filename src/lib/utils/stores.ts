import { PUBLIC_MESSAGE_TIMEOUT } from '$env/static/public';
import type { ButtonColor, ButtonSize } from '$lib/svelma/utils/bulma.types';
import { writable } from 'svelte/store';

const mesageTimeout = +PUBLIC_MESSAGE_TIMEOUT * 1000;

export type MessageType = 'error' | 'warn' | 'info' | 'debug';
export type Message = {
	type: MessageType;
	message: string;
};
export type MenuAction = {
	icon?: string;
	text?: string;
	href?: string;
	title?: string;
	color?: ButtonColor;
	size?: ButtonSize;
	preloadData?: 'tap' | 'hover';
	click?: () => void;
};

export const appMessage = writable<Message | null>(null);
export const appTitle = writable<string>('');
export const appMenuStart = writable<MenuAction[]>([]);
export const appMenuEnd = writable<MenuAction[]>([]);

export function setAppMessage(message: string, type: MessageType = 'info'): Message {
	const msg: Message = { type, message };
	appMessage.set(msg);
	if (type != 'error') {
		setTimeout(clrAppMessage, mesageTimeout);
	}
	return msg;
}
export function clrAppMessage() {
	appMessage.set(null);
}
