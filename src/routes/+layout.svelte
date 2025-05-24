<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="mx-16 my-8">
	<div class="relative flex flex-col items-start justify-start">
		<div class="text-left">
			<h1 id="title" class="text-6xl title-hover title">
				<a href="/">AR·CHI·PEL·AGO</a>
			</h1>
			<h2 id="about" class="text-lg title-hover subTitle">
				<a href="/about">Luke Brown Abour</a>
			</h2>
		</div>
	</div>

	{@render children()}
</div>
