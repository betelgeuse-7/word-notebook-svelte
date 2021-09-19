<script>
    import NewWord from "./NewWord.svelte"
    import WordList from "./WordList.svelte"
    
    import { retrieve, save } from "./storage.js"

    let words = retrieve()
    let error = ""
    let msg = ""

    function handleNewWord(wordObj) {
        save(wordObj)
        error = ""
        msg = ""
        words = retrieve()
    }
    function handleError(errMsg) {
        error = errMsg.err
    }
    function handleDelete(data) {
        console.log(msg)
        msg = msg.msg
        words = retrieve()
    }
</script>

<main>
    <h1>Vocabulary Notebook</h1>
    {#if error !== ""}
        <div class="err">{error}</div>
    {/if}
    {#if msg !== ""}
        <div class="msg">{msg}</div>
    {/if}
    <NewWord on:new-word={data => handleNewWord(data.detail)} on:error={data => handleError(data.detail)} />
    {#if words !== null}
        <WordList words={words} on:delete={data => handleDelete(data.detail)} />
    {:else}
        <div>No words. Add some</div>
    {/if}
</main>

<style>
    * {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
</style>