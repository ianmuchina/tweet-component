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
  {#each tweets as tweet}
    <Tweet {tweet} />
  {/each}
</main>
