<script>
    import { createEventDispatcher } from "svelte"
    import Button from "./Button.svelte"

    const LANGUAGES = [
        {id: 1, val: "tr", name: "Turkish"},
        {id: 2, val: "en", name: "English"},
        {id: 3, val: "ar", name: "Arabic"},
        {id: 4, val: "in", name: "Indian"},
        {id: 5, val: "fr", name: "French"},
        {id: 6, val: "de", name: "German"},
        {id: 7, val: "es", name: "Spanish"},
        {id: 8, val: "ja", name: "Japanese"},
        {id: 9, val: "ch", name: "Chinese"},
        {id: 10, val: "ru", name: "Russian"},
    ]

    const data = {
        language: "",
        word: "",
        meaning: "",
    }
    const err = {
        err: "invalid input"
    }

    const dispatch = createEventDispatcher()

    function checkData(d) {
        const GOOD = 3 
        let points = 0
        if (d.word.trim().length > 0) points += 1
        if (d.meaning.trim().length > 0) points += 1
        for (let i = 0; i < LANGUAGES.length; i++) {
            if (LANGUAGES[i].val === d.language) points += 1
        }
        
        if (points === GOOD) return true
        return false
    }

    function handleForm() {
        if (checkData(data)) {
            dispatch("new-word", {...data, id: Math.random()})
            return
        }
        dispatch("error", err)
    }
</script>

<form id="new-word-form" on:submit|preventDefault={handleForm}>
    <label for="language-select">Language: </label>
    <select id="language-select" bind:value={data.language}>
        {#each LANGUAGES as lang (lang.id)} 
            <option value={lang.val}>{lang.name}</option>
        {/each}
    </select>
    
    <label for="learned-word">Word: </label>
    <input type="text" id="learned-word" bind:value={data.word}>
    
    <label for="meaning">Meaning: </label>
    <input type="text" id="meaning" bind:value={data.meaning}>

    <Button type={"submit"} id={"submit-btn"} text={"Submit"} />
</form>

<style>
    input {
        width: 25%;
        height: 2vh;
        padding: 10px;
        font-size: 18px;
    }
    select {
        height: 4vh;
        font-size: 15px;
    }
</style>