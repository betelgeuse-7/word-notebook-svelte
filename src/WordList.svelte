<script>
    import Word from "./Word.svelte"

    export let words
</script>

<div id="word-list">
    {#each words as word} 
        <Word language={word.language} word={word.word} meaning={word.meaning} uniqueId={word.id} on:delete />
    {/each}
</div>

<style>
    #word-list {
        margin-top: 15px;
        padding: 15px;
        border-top: 1px solid black;
    }
</style>