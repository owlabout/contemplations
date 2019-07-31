<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`index.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { posts: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import { lang } from "./_layout.svelte";
  import Excerpt from "../components/Excerpt.svelte";

  export let posts;

  onMount(() => {
    lang.set("de");
  });
</script>

<style>
  .about {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 520px;
    background: 
      linear-gradient(
        45deg,
        #7B74E0 40.91%, 
        #D0CDE1 100%
      );
  }
  .about img {
    position: absolute;
    bottom: 40px;
    left: 20px;
    z-index: -1;
    width: calc(520px - 40px);
  }
  .description {
    width: 37rem;
    background: var(--color-primary);
    color: white;
    padding: 4rem 2rem;
    margin-left: 80px;
    margin-top: 86px;
  }
  h1 {
    font-weight: 100;
    color: white;
    margin-top: 0;
    -webkit-font-smoothing: antialiased;
  }

  p {
    font-size: 11pt;
    -webkit-font-smoothing: antialiased;
  }

  .excerpts-container {
    position: absolute;
    right: 0;
    top: 39px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: calc(100vw - 520px);
  }

  @media(max-width: 860px) {
    .about {
      position: relative;
      width: 100vw;
      margin-top: -70px;
      height: auto;
      padding: 20px;
    }

    .about img {
      width: 200px;
      z-index: 1;
    }

    .description {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }

    .excerpts-container {
      position: relative;
      width: 100vw
    }
  }
</style>

<svelte:head>
  <title>OwlAbout Blog</title>
  <meta
    name="Description"
    content="Blog über Random Gedanken" />
</svelte:head>
<div class="container">
  <div class="about">
    <img src="/images/about-background.svg" alt="girl-thinking">
    <div class="description">
      <h1>Casual Contemplations</h1>
      <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    </div>
  </div>
  <div class="excerpts-container">
    {#each posts as post}
      <Excerpt {post} />
    {/each}
  </div>
</div>

