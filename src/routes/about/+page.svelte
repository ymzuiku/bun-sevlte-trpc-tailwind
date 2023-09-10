<script lang="ts">
	import { trpc } from '$lib/trpc/trpc-client';

	let data = trpc.getSentence.mutate({ userId: 3 });
</script>

{#await data}
	<div>loading...</div>
{:then dataRes}
	<div>{JSON.stringify(dataRes)}</div>
{/await}
