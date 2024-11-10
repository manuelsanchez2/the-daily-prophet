<script lang="ts">
	let { issue }: { issue: string } = $props();
	import dailyProphet from '$assets/logo-the-daily-prophet.webp';
	import GridDebug from '$lib/components/GridDebug.svelte';
	import NoisyBackground from '$lib/components/NoisyBackground.svelte';
	import IssueSiriusBlack from '$lib/issues/IssueSiriusBlack.svelte';

	let newspaperIssue = $state(issue);

	$effect(() => {
		window.history.pushState({}, '', `/?issue=${newspaperIssue}`);
	});

	function changeIssue(event: any) {
		console.log('type of the event', typeof event);
		newspaperIssue = event.target.value;
	}
</script>

<div
	id="app"
	class="relative border border-gray-400 p-z-ds-20 pb-0 bg-yellow-400 max-w-5xl mx-auto"
	style="filter: sepia(90%)"
>
	<select
		class="border border-black flex w-full items-end p-3"
		onchange={changeIssue}
		value={newspaperIssue}
		name="change-issue"
		id="change-issue"
	>
		<option value="sirius-black">Sirius Black</option>
		<option value="world-cup">World Cup</option>
	</select>

	<NoisyBackground />
	<GridDebug active={false} />

	<figure class="z-30">
		<img class="brightness-0" src={dailyProphet} alt="The Daily Prophet Logo" />
	</figure>

	<div class="px-z-ds-6 sm:px-z-ds-12">
		<div class="my-z-ds-32 px-z-ds-24 py-z-ds-16 border-4 border-black w-full">
			{#if newspaperIssue == 'sirius-black'}
				<IssueSiriusBlack />
			{:else if newspaperIssue === 'world-cup'}
				<h1>IssueWorldCup</h1>
			{/if}
		</div>
	</div>
</div>
