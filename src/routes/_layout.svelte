<script context="module">
  import { writable } from "svelte/store";
  const { subscribe, set: setLang } = writable("de");
  export const lang = {
    subscribe,
    set(lang) {
      setLang(lang ? lang : "de");
    }
  };
</script>

<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  function updateLang(lang) {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }

  function addFootnoteEventListeners() {
    if (typeof document !== "undefined") {
      let footnotes = document.getElementsByClassName("footnote");
      console.log(footnotes);
      footnotes.addEventListener("click", function() {
        footnotes.getElementsByClassName(
          "footnote-container"
        )[1].style.display = "block";
      });
    }
  }

  export let segment;
  $: classes = `layout__${segment ? segment : "start"}`;
  $: updateLang($lang);
  // $: addFootnoteEventListeners();
</script>

<div class="layout {classes}">
  <!-- <Nav /> -->
  <div class="top-bar" />

  <main class={classes}>
    <slot />
  </main>

  <!-- <Footer /> -->
</div>
