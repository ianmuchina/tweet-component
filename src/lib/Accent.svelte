<script lang="ts">
    // Array of settings. Default is the first one
    // Various colors
    const accents = ["blue", "yellow", "pink", "purple", "green"];
    // Various backgrounds
    const backgrounds = ["light", "dark", "dim"];
    // Various font Sizes
    const fontSizes = ["xs", "sm", "md", "lg", "xl"];

    // Get current setting. if not set, set a default and return that
    function cur(key: string, arr: string[]) {
        let result = localStorage.getItem(key);
        // Setting is valid
        if (arr.includes(result)) {
            return result;
        }
        // Setting is invalid
        localStorage.setItem(key, arr[0]);
        return arr[0];
    }
    // Init
    $: bg = cur("bg", backgrounds);
    $: accent = cur("accent", accents);
    $: fontSize = cur("fontSize", fontSizes);

    document.documentElement.setAttribute("data-bg", localStorage.bg);
    document.documentElement.setAttribute("data-accent", localStorage.accent);
    document.documentElement.setAttribute(
        "data-fontSize",
        localStorage.fontSize
    );

    // Update
    function nextBg() {
        bg = backgrounds[(backgrounds.indexOf(bg) + 1) % backgrounds.length];
        localStorage.bg = bg;
        document.documentElement.setAttribute("data-bg", bg);
    }
    function nextAccent() {
        accent = accents[(accents.indexOf(accent) + 1) % accents.length];
        localStorage.accent = accent;
        document.documentElement.setAttribute("data-accent", accent);
    }
    function nextFontSize() {
        fontSize =
            fontSizes[(fontSizes.indexOf(fontSize) + 1) % fontSizes.length];
        localStorage.fontSize = fontSize;
        document.documentElement.setAttribute("data-fontSize", fontSize);
    }
</script>

<section>
    <button
        style="background-color: var(--bg); color: var(--text);"
        on:click={nextBg}
    />
    <button
        style="background-color: var(--accent-500); color: var(--text);"
        on:click={nextAccent}
    />
    <!-- <button on:click={nextFontSize} /> -->
    <!-- Color -->
</section>

<style>
    section {
        padding: 1rem;
        position: sticky;
        top: 0;
        margin: 1rem;
        max-width: max-content;
    }

    button {
        border: unset;
        border: solid 2px var(--text-secondary);
        border-radius: 100%;
        min-width: 1.5rem;
        height: 1.5rem;
        font-size: 1.2rem;
        text-transform: uppercase;
    }
</style>
