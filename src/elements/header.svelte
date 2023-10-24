<script>
	var oscuro = false;
	function reloadTheme() {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			oscuro = true;
		} else {
			document.documentElement.classList.remove('dark');
			oscuro = false;
		}
	}
</script>

<header class="flex justify-between p-2 items-center fixed z-40 top-0 w-full backdrop:blur-3xl">
	<div class="flex-1 justify-center flex gap-2">
		{#if oscuro}
			<button
				class="material-icons"
				on:click={() => {
					localStorage.theme = 'light';

					reloadTheme();
				}}>dark_mode</button
			>
		{:else}
			<button
				class="material-icons"
				on:click={() => {
					localStorage.theme = 'dark';
					reloadTheme();
				}}
			>
				light_mode
			</button>
		{/if}
	</div>
	<div class="flex-1 justify-center flex">2023</div>
	<div class="flex-1 justify-center flex">
		<button
			class="bg-secondary border-text border text-text flex items-center justify-center p-2 rounded-full gap-2 hover:rotate-6 transition-all"
			>Contacto <span class="material-icons">add_ic_call</span></button
		>
	</div>
</header>
