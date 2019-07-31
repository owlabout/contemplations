<script>
  import Icon from "./Icon.svelte";

  export let post;
</script>

<style>
  :root {
    --excerpt-size: 250px;
  }

  .excerpt {
    width: var(--excerpt-size);
    height: var(--excerpt-size);
    background: linear-gradient(
      45deg,
      rgba(2, 206, 221, 1) 0%,
      rgba(37, 108, 112, 1) 100%
    );
    /* border-radius: 10px; */
    margin: 20px;
    transition: 0.3s ease-in-out;
    position: relative;
  }
  .excerpt:hover {
    transform: scale(1.1);
  }

  .excerpt img {
    width: 100%;
    max-height: 100%;
    top: 50%;
    position: relative;
    transform: translateY(-50%);
  }

  .excerpt img[src$=".svg"] {
    padding: 3rem;
  }

  .excerpt-element {
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .excerpt-title {
    width: var(--excerpt-size); 
    height: 7rem;
    position: absolute;
    bottom: 2rem;
  }

  .excerpt-date {
    position: absolute;
    height: 3rem;
    width: 8rem;
    right: 0;
    top: 1rem;
    font-size: 1.2rem;
    color: var(--color-lightgrey);
  }

  h3 {
    font-family: inherit;
    margin: 0;
    padding: 7px;
    color: var(--color-background);
    text-align: center;
    font-size: 1.6rem;
    font-weight: 300;
  }

</style>

<a class="excerpt" 
      rel="prefetch" 
      href={post.link} 
      role="presentation" 
      style="background: linear-gradient(45deg,{post.colorLeft},{post.colorRight})">
  <img src={post.thumbnail} role="presentation" alt="Post Thumbnail" />
  <div class="excerpt-element excerpt-date ">
    <span>{post.dateString}</span>
  </div>
  <div class="excerpt-element excerpt-title">
    <h3>{post.title}</h3>
  </div>
</a>
