<script>
	import { dev } from "$app/environment";
</script>

{#if dev}
    <aside aria-hidden="true" hidden aria-label="Debug Tool for checking the current resolution we are in" class="size-debug fixed left-0 bottom-0 z-[200] flex w-[30px] items-center justify-center bg-z-ds-color-text-40 border border-z-ds-general-black-100 py-[2.5px] text-[12px] uppercase xs:bg-blue-200 sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-pink-200">
        <span class="block sm:hidden">all</span>
        <!-- TODO: add the right classes for the right breakpoints from ZEIT Online  -->
        <span class="hidden sm:block md:hidden">sm</span>
        <span class="hidden md:block lg:hidden">md</span>
        <span class="hidden lg:block xl:hidden">lg</span>
        <span class="hidden xl:block 2xl:hidden">xl</span>
        <span class="hidden 2xl:block">2xl</span>
    </aside>
{/if}