<script lang="ts">
	import { dev } from "$app/environment";
	let {active}: {active: boolean} = $props()

	let gridItemsDesktop = Array.from({ length: 12 }, (_, i) => i + 1);
	let gridItemsTablet = Array.from({ length: 8 }, (_, i) => i + 1);
	let gridItemsMobile = Array.from({ length: 4 }, (_, i) => i + 1);
</script>

{#if dev && active}
	<div
		class="absolute grid-container grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 min-h-screen gap-z-ds-16 px-z-ds-32 inset-0 -z-10"
	>
		<!-- Create 12 columns -->
		{#each gridItemsDesktop as _}
			<div class="grid-item hidden lg:block bg-red-200 px-3"></div>
		{/each}
		{#each gridItemsTablet as _}
			<div class="grid-item hidden md:block lg:hidden bg-red-200 px-3"></div>
		{/each}
		{#each gridItemsMobile as _}
			<div class="grid-item md:hidden bg-red-200 px-3"></div>
		{/each}
	</div>
{/if}
