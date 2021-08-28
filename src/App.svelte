<script>
	import Header from './Components/Header.svelte'
	import Footer from './Components/Footer.svelte'
	import Card from './Shared/Card.svelte'
	import CharacterForm from './Components/CharacterForm.svelte'
	import Button from './Shared/Button.svelte'
	import MessagesForm from './Components/MessagesForm.svelte'
	import Messages from './Components/Messages.svelte'

	let characters = [];
	let currentStep;
	let messages = [];

	function addCharacter(e) {
		let character = e.detail;
		characters = [character, ...characters]
		console.log(characters)
	}

	function showCharacterForm() {
		currentStep = "addCharacter";
	}

	function showCreateMessagesForm() {
		currentStep = "createMessages"
	}

	function addMessage(e) {
		const message = e.detail;
		messages = [message, ...messages];
	}

	function showPreview() {
		currentStep = "preview"
	}
</script>

<Header/>

<main>
	<div class="grid grid-cols-3 text-center align-middle">
		<div class="bg-blue-600 p-10 text-blue-200">
			<p>Step 1:</p>
			<Button flat=false on:click={showCharacterForm}>Add Characters!</Button>
		</div>
		<div class="p-10 bg-blue-500 text-blue-100">
			<p>Step 2:</p>
			<Button flat=false on:click={showCreateMessagesForm}>Create messages!</Button>
		</div>
		<div class="p-10 bg-blue-400 text-blue-200">
			<p>Step 3:</p>
			<Button on:click={showPreview}>Download your work!</Button>
		</div>
	</div>

	<div class="flex justify-center m-4" id="stepFormView">
		<!-- svelte-ignore empty-block -->
		{#if currentStep === "addCharacter"}
		<Card>
			<CharacterForm on:addCharacter={addCharacter}/>
			<hr>
			<div class="flex m-2">
				{#each characters as char}
				<img src={char.pfp} alt={char.username} class="h-10 w-10">
				{/each}
			</div>
		</Card>
		{:else if currentStep == "createMessages"}
		<Card>
			<MessagesForm {characters} on:addMessage={addMessage}/>
			<hr>
			<p class="text-center text-xs m-2">Messages: {messages.length}</p>
		</Card>
		{:else if currentStep == "preview"}
			<Messages {messages}/>
		{/if}
	</div>
</main>

<Footer/>

<style>
</style>