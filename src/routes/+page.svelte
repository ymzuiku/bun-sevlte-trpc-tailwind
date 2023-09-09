<script lang="ts">
	import { trpc } from '$lib/trpc/client';
	let greeting = 'loading...';
	const loadData = async () => {
		greeting = await trpc().greeting.query();
	};
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div>{greeting}</div>
	<button on:click={loadData}>get</button>
</section>
