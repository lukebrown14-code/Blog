<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="p-8 text-left">
	<h1 class="text-6xl decoration-dotted"><a href="/">Archiplego</a></h1>
</div>

{@render children()}
