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
  import Footer from "../components/Footer.svelte";

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
    padding-bottom: 80px;
    min-height: calc(100vh - 50px);
  }

  @media(max-width: 860px) {
    .about {
      position: relative;
      width: 100vw;
      height: 100vh;
      padding: 20px;
    }

    .about img {
      width: 200px;
      z-index: 1;
    }

    .description {
      position: relative;
      width: calc(100vw - 30px);
      max-width: 500px;
      margin-left: 0;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 30px;
    }

    .excerpts-container {
      position: relative;
      width: 100vw;
    }
  }

  @media (orientation:landscape) and (max-width: 860px){ 
    .description {
      width: calc(55vw);
      left: 70%;
    }
  }
</style>

<svelte:head>
  <title>OwlAbout Casual Contempations</title>
  <meta
    name="Description"
    content="Life Blog. Stories of things that go on in my mind. More or less true. More or less interesting. Random ideas. Simple thoughts. Casual contemplations." />
</svelte:head>
<div class="container">
  <div class="about">
    <img src="/images/about-background.svg" alt="girl-thinking">
    <div class="description">
      <h1>Casual Contemplations</h1>
      <p>Stories of things that go on in my mind. More or less true. More or less interesting. Random ideas. Simple thoughts. Casual contemplations.</p>
    </div>
  </div>
  <div class="excerpts-container">
    {#each posts as post}
      <Excerpt {post} />
    {/each}
    <Footer/>
  </div>
</div>

