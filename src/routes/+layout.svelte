<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="ml-15 relative mt-5 flex flex-col items-start justify-start">
	<div class="text-left text-stone-900">
		<h1 id="title" class="text-6xl title-hover">
			<a href="/">ar·chi·pel·ago</a>
		</h1>
		<h2 id="about" class="text-lg title-hover italic font-light text-stone-700 opacity-70">
			<a href="/about">By Luke Brown</a>
		</h2>
	</div>
</div>

{@render children()}
