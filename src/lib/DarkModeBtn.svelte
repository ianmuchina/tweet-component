<script lang="ts">
    const themes = ["dark", "light"];
    $: curTheme = 0;

    function toggleTheme() {
        curTheme = (curTheme + 1) % themes.length;
        document.documentElement.className = themes[curTheme];
    }
</script>

<button
    on:click={toggleTheme}
    aria-label="Dark Mode Button"
    style="font-family: monospace;">◐</button
>
