<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js"></script>
</svelte:head>

<script>
    import Button from '../Shared/Button.svelte'

    export let messages;
    console.log(messages)
</script>

<div class="w-full bg-dc-gray font-whitney rounded-md" id="imgDIV">
    {#each messages as msg}
    <div class="message flex ml-6 my-3 py-4 border-t border-gray-700 message">
        <div class="flex-none">
          <a href="#"><img src={msg.pfp} alt="avatar" class="w-12 h-12 rounded-full"></a>
        </div>
        <div class="ml-5">
          <div>
            <a href="#" class="text-white hover:underline">{msg.username}</a>
            <span class="text-xs text-gray-600 ml-1">Today at {msg.time}</span>
          </div>
          <div>
            <div class="text-white">{msg.message}</div>
          </div>
        </div>
      </div>
    {/each}
</div>

<Button disabled=true>Download images! (Coming Soon)</Button>

<div id="export"></div>

<style>

</style>