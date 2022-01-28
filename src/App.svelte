<script lang="ts">
  import "open-props/style";
  import "sanitize.css";
  import { tweets } from "./lib/data";
  import Tweet from "./lib/Tweet.svelte";
  import DarkModeBtn from "./lib/DarkModeBtn.svelte";
  import Accent from "./lib/Accent.svelte";
</script>

<main>
  <Accent />
  <!-- <DarkModeBtn /> -->
  <div>
    {#each tweets as tweet}
      <Tweet {tweet} />
    {/each}
  </div>
</main>

<style>
  div {
    margin: auto;
    gap: 1rem;
    /* 
    flex-wrap: wrap;
    max-height: 4000px;
    max-width: 1500px;
    margin: auto;
    gap: 8px; */
  }
</style>
