<script>
	import Button from '../Shared/Button.svelte'
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    let name, pfp;
    
</script>

<div class="characterForm text-center">
    <h3 class="text-xl text-bold text-blue-700">Add characters!</h3>
    <hr>
    <form on:submit|preventDefault={dispatch('addCharacter', {username: name, pfp: pfp})} class="mt-2">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="text-xs">Their username:</label>
        <br>
        <input type="text" class="rounded" bind:value={name}>
        <br><br>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="text-xs">A link to their profile pic:</label>
        <br>
        <input type="text" class="rounded" bind:value={pfp}>
        <br>
        <Button>Add</Button>
    </form>
</div>