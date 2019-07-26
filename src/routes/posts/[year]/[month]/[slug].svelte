<script context="module">
  export async function preload({ params, query }) {
    const { year, month, slug } = params;
    const res = await this.fetch(`posts/${year}/${month}/${slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import Hero from "../../../../components/Hero.svelte";
  import { lang } from "../../../_layout.svelte";

  export let post;

  $: sticky = post.html.indexOf("sticky__container") > 0;
  $: console.log(post.metadata)

  onMount(() => {
    lang.set(post.metadata.lang);
  });
</script>

<style>
  
</style>

<svelte:head>
  <title>{post.title}</title>
  {#if post.metadata.description}
    <meta name="Description" content={post.metadata.description} />
  {/if}
</svelte:head>

<div class="background" style="--background-image: url({post.metadata.background})">
  <!-- <img {src} {alt} /> -->
</div>
<div class="top-bar"></div>
<nav>
  <a href="/">Back</a>
</nav>
<div class="post-container" class:has-sticky={sticky}>
  {@html post.html}
</div>
