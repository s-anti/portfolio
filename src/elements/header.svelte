<script>
	function reloadTheme() {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<header class="flex justify-between p-2 items-center fixed z-40 top-0 w-full">
	<div class="flex-1 justify-center flex">asd</div>
	<div class="flex-1 justify-center flex">asd</div>
	<div class="flex-1 justify-center flex gap-2">
		<button
			on:click={() => {
				localStorage.theme = 'light';

				reloadTheme();
			}}
		>
			Blacn
		</button>

		<button
			on:click={() => {
				localStorage.theme = 'dark';
				reloadTheme();
			}}
		>
			nego
		</button>

		<button
			on:click={() => {
				localStorage.removeItem('theme');
				reloadTheme();
			}}
		>
			defaul
		</button>
	</div>
</header>
