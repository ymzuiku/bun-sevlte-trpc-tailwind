<script lang="ts">
	import { trpc } from '$lib/trpc/trpc-client';
	let error = '';
	function loadSentences() {
		return trpc.getSentence.mutate({ userId: Date.now() % 3 });
	}
	let sentences = loadSentences();
	async function handleInsert() {
		trpc.insertSentence.mutate({ text });
		sentences = loadSentences();
	}

	let text = '';
</script>

<svelte:head>
	<title>AI sentences</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if error}
	<div>error: {error}</div>
{/if}

<section>
	<form on:submit|preventDefault={handleInsert}>
		<input bind:value={text} />
		<button aria-label="add sentence" type="submit">add sentence</button>
	</form>
	{#await sentences}
		<div>loading...</div>
	{:then sentencesRes}
		{#if 'status' in sentencesRes}
			<div class="flex flex-row gap-4">
				<div>{sentencesRes.status}</div>
				<div>{sentencesRes.body.message}</div>
			</div>
		{:else}
			{#each sentencesRes as item}
				<div class="flex flex-row gap-4">
					<div>{item.id}</div>
					<div>{item.text}</div>
					<div>{item.created}</div>
				</div>
			{/each}
		{/if}
	{/await}
</section>
