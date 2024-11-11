<script>
	import BreakpointsDebug from '$lib/components/BreakpointsDebug.svelte';
	import '../app.css';
	import { inject } from '@vercel/analytics'

	inject()
</script>

<slot />
<BreakpointsDebug />

