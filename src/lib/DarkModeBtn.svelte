<script lang="ts">
    const themes = ["dark", "light"];

    let curTheme: number;

    if (localStorage.getItem("theme") === "light") {
        curTheme = 1;
    } else if (localStorage.getItem("theme") === "dark") {
        curTheme = 0;
    } else {
        curTheme = 0;
    }

    function toggleTheme() {
        // Update Theme
        curTheme = (curTheme + 1) % themes.length;
        // Save State in LocalStorage
        localStorage.setItem("theme", themes[curTheme]);
        // Update Document Class
        document.documentElement.className = localStorage.getItem("theme");
    }

    // Apply Theme from localstorage
    document.documentElement.className = localStorage.getItem("theme");
</script>

<button
    on:click={toggleTheme}
    aria-label="Dark Mode Button"
    style="font-family: monospace;">◐</button
>
