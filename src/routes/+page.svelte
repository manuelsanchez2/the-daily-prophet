<script lang="ts">
	import App from '$lib/components/App.svelte';
	let { data } = $props();
	const issue = data.issue;
</script>

<App {issue} />

<!-- <p class="my-z-ds-24 font-bold first-letter:block first-letter:w-full first-letter:font-letter first-letter:text-9xl">Dont</p> -->
