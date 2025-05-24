<script lang="ts">
	interface posts {
		title: string;
		subTitle: string;
		tags: string[];
	}
	interface postCollection {
		[key: number]: posts;
	}

	const blogPosts: postCollection = {
		1: {
			title: 'A-Brief-History-of-England',
			subTitle: 'From Stonehenge to Empire: A Journey Through Time',
			tags: ['England', 'History']
		},
		2: {
			title: 'Post',
			subTitle: 'Post 2',
			tags: ['four', 'three']
		}
	};
</script>

<div class="mt-6">
	<h1 class="text-left text-5xl title">READ·ING</h1>
	<div class="mt-4">
		{#each Object.values(blogPosts) as post}
			<div class="mt-2">
				<h2 class="title-hover title text-xl">
					<a href="/blog/{post.title}">{post.title.replaceAll('-', ' ')}</a>
				</h2>
				<p class="mx-2 text-sm subTitle">{post.subTitle} - {post.tags}</p>
			</div>
		{/each}
	</div>
</div>
