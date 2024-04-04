import type { ClientContactType, Role } from '$lib/models/core';
import {
	mdiAccount,
	mdiAccountCircle,
	mdiAccountCogOutline,
	mdiAccountKey,
	mdiAccountOff,
	mdiAccountSupervisor,
	mdiArrowLeft,
	mdiBookCheck,
	mdiChevronLeft,
	mdiChevronRight,
	mdiContacts,
	mdiContentCopy,
	mdiDockWindow,
	mdiEmail,
	mdiFacebook,
	mdiMagnify,
	mdiMapMarker,
	mdiMenu,
	mdiPencil,
	mdiPhone,
	mdiPlus,
	mdiSend,
	mdiTrashCan,
} from '@mdi/js';

export const appIcons = {
	search: mdiMagnify,
	openNew: mdiDockWindow,
	send: mdiSend,
	menu: mdiMenu,
	add: mdiPlus,
	edit: mdiPencil,
	del: mdiTrashCan,
	users: mdiAccount,
	clients: mdiAccountCircle,
	contacts: mdiContacts,
	copy: mdiContentCopy,
	credential: mdiAccountKey,
	back: mdiArrowLeft,
	facebook: mdiFacebook,
	prev: mdiChevronLeft,
	next: mdiChevronRight,
	read: mdiBookCheck,
	banUser: mdiAccountOff,
};

export const roleIcons = {
	admin: mdiAccountCogOutline,
	supervisor: mdiAccountSupervisor,
	user: mdiAccount,
	client: mdiAccountCircle,
};

export const contactTypeIcons = {
	email: mdiEmail,
	phone: mdiPhone,
	address: mdiMapMarker,
};

export function getRoleIcon(role: Role): string {
	return roleIcons[role as keyof typeof roleIcons];
}

export function getContactTypeIcons(type: ClientContactType): string {
	return contactTypeIcons[type as keyof typeof contactTypeIcons];
}
