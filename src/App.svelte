<script lang="ts">
  import "open-props/style";
  import "open-props/normalize";
  import "sanitize.css";

  import Tweet from "./lib/Tweet.svelte";
</script>

<main>
  <Tweet />
</main>

<style>
  main {
    max-width: 768px;
    margin: auto;
  }
</style>
