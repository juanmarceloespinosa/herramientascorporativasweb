<script lang="ts">
	import { enhance } from '$app/forms';
	import ErrorDetails from '$lib/components/details/ErrorDetails.svelte';
	import LayoutTitle from '$lib/components/layouts/LayoutTitle.svelte';
	import { contactSchema, contactSchemaDef } from '$lib/models/core';
	import Columns from '$lib/svelma/components/common/Columns.svelte';
	import Content from '$lib/svelma/components/common/Content.svelte';
	import IconText from '$lib/svelma/components/common/IconText.svelte';
	import Control from '$lib/svelma/components/forms/Control.svelte';
	import Field from '$lib/svelma/components/forms/Field.svelte';
	import Label from '$lib/svelma/components/forms/Label.svelte';
	import { bulmaHelpers } from '$lib/svelma/utils/bulma';
	import { appIcons } from '$lib/utils/appIcons';

	const errorName = contactSchema.error();
	const errorEmail = contactSchema.error();
	const errorPhone = contactSchema.error();
	const errorSubject = contactSchema.error();
	const errorService = contactSchema.error();
	const errorBudget = contactSchema.error();
	const errorMessage = contactSchema.error();
	const useName = contactSchema.def.name.actionInput(errorName);
	const useEmail = contactSchema.def.email.actionInput(errorEmail);
	const usePhone = contactSchema.def.phone?.actionInput(errorPhone);
	const useSubject = contactSchema.def.subject?.actionInput(errorSubject);
	const useService = contactSchema.def.service?.actionInput(errorService);
	const useBudget = contactSchema.def.budget?.actionInput(errorBudget);
	const useMessage = contactSchema.def.message?.actionTextarea(errorMessage);

	export let form;

	$: errors = contactSchema.flatErrors(form?.errors);
	$: isValid =
		[
			$errorName,
			$errorEmail,
			$errorPhone,
			$errorSubject,
			$errorService,
			$errorBudget,
			$errorMessage
		].filter(Boolean).length == 0;
	$: console.log({ isValid });
</script>

<LayoutTitle title="Contacto">
	<Columns let:Column>
		<Column size="6" offset="3">
			<div class="page">
				<Content>
					<center
						><br />
						<strong>NIT: 381576024</strong>
						<br />
						<strong>Dirección – Santa Cruz</strong>
						<br />
						Radial 25 y 5to anillo
						<br />
						Barrio 15 de Julio
						<br />
						C/3 S/N
						<br />
						Telf. 76060976
					</center>
					<br />
					Si desea más información, o tiene algún requerimiento o consulta, por favor rellene sus datos,
					en breve nos comunicaremos con usted.
				</Content>
				<ErrorDetails {errors} />
				<form action="?/contact" method="POST" use:enhance>
					<input type="hidden" name="closed" value="false" />
					<input type="hidden" name="username" value="" />
					<Field helpColor="danger" helpText={$errorName || ''}>
						<Label id="name">{contactSchema.def.name.title}</Label>
						<Control>
							<input class={bulmaHelpers.input({})} {...contactSchema.def.name.input} use:useName />
						</Control>
					</Field>
					<Field helpColor="danger" helpText={$errorEmail || ''}>
						<Label id="email">{contactSchema.def.email.title}</Label>
						<Control>
							<input
								class={bulmaHelpers.input({})}
								{...contactSchema.def.email.input}
								use:useEmail
							/>
						</Control>
					</Field>
					<Field helpColor="danger" helpText={$errorPhone || ''}>
						<Label id="phone">{contactSchema.def.phone.title}</Label>
						<Control>
							<input
								class={bulmaHelpers.input({})}
								{...contactSchema.def.phone.input}
								use:usePhone
							/>
						</Control>
					</Field>
					<Field helpColor="danger" helpText={$errorSubject || ''}>
						<Label id="subject">{contactSchema.def.subject.title}</Label>
						<Control>
							<input
								class={bulmaHelpers.input({})}
								{...contactSchema.def.subject.input}
								use:useSubject
							/>
						</Control>
					</Field>
					<Field helpColor="danger" helpText={$errorService || ''}>
						<Label id="service">{contactSchema.def.service.title}</Label>
						<Control>
							<input
								class={bulmaHelpers.input({})}
								{...contactSchema.def.service.input}
								use:useService
							/>
						</Control>
					</Field>
					<Field helpColor="danger" helpText={$errorBudget || ''}>
						<Label id="budget">{contactSchema.def.budget.title}</Label>
						<Control>
							<input
								class={bulmaHelpers.input({})}
								{...contactSchema.def.budget.input}
								use:useBudget
							/>
						</Control>
					</Field>
					<Field helpColor="danger" helpText={$errorMessage || ''}>
						<Label id="message">{contactSchema.def.message.title}</Label>
						<Control>
							<textarea
								class={bulmaHelpers.textarea({})}
								{...contactSchema.def.message.input}
								use:useMessage
								rows="5"
							/>
						</Control>
					</Field>
					<button
						type="submit"
						class="button is-primary is-fullwidth"
						disabled={!isValid || undefined}
					>
						<IconText icon={appIcons.send} text="Enviar" />
					</button>
				</form>
			</div>
		</Column>
	</Columns>
</LayoutTitle>