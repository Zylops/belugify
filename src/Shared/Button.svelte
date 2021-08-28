<script>
    export let inverse = false;
    export let flat = true;
    export let disabled = false;
</script>

<!-- svelte-ignore empty-block -->
{#if inverse}
<button on:click class="rounded bg-transparent p-2 text-white border-2 border-blue-700 m-2 hover:border-blue-500 transition ease-linear shadow-md" class:bg-blue-200={disabled} class:shadow-none={flat}>
    <slot></slot>
</button>
{:else}
<button on:click class="rounded bg-blue-700 p-2 text-white m-2 hover:bg-blue-600 transition ease-linear shadow-md" class:bg-blue-200={disabled} class:shadow-none={flat}>
    <slot></slot>
</button>
{/if}