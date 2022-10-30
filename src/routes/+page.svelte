<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  const { videos } = data;
  console.log(videos.items[0].id);
  const nextPageToken = videos.nextPageToken;
</script>

<h1 class="text-xl text-center">Duffman</h1>
<div class="grid justify-items-center">
  {#each videos.items as video}
    <!-- content here -->
    <div class="py-12">
      <iframe
        class="iframe p-7"
        title="Trailer"
        src="https://www.youtube.com/embed/{video.id
          .videoId}?rel=0&autoplay=1&t=1m30s"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        width="560"
        height="320"
        allowfullscreen
      >
        <track default kind="captions" />
      </iframe>
    </div>
  {:else}
    <!-- empty list -->
    <p>No videos</p>
  {/each}
</div>
