<script>
    import Button from '../Shared/Button.svelte'
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    let message, author, pfp, username;

    export let characters;

    function dispatchAddEvent() {
        author = characters.filter(chr => chr.username == username)
        pfp = author[0].pfp
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        dispatch('addMessage', {message, username, pfp, time})
    }
</script>

<div class="messagesForm text-center">
    <h3 class="text-xl text-bold text-blue-700">Add messages!</h3>
    <hr>
    <form class="m-2" on:submit|preventDefault={dispatchAddEvent}>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="text-xs">Select the author:</label>
        <br>
        <select bind:value={username}>
            {#each characters as char}
                <option value={char.username}>{char.username}</option>
            {/each}
        </select>
        <br><br>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="text-xs">What they say:</label>
        <br>
        <input type="text" class="rounded" bind:value={message}>
        <br>
        <Button>Add</Button>
    </form>
</div>