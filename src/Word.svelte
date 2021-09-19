<script>
    export let language
    export let word
    export let meaning
    export let uniqueId

    import { createEventDispatcher } from "svelte";

    import { delete_ } from "./storage.js"

    const dispatch = createEventDispatcher()
</script>

<div class="word-wrapper" data-uniqueId={uniqueId}>
    <span class="lang {language}">{language}</span>
    <span class="word">{word}</span>
    <span>&nbsp&nbsp&nbsp</span>
    <span class="meaning">{meaning}</span>
    <span>&nbsp&nbsp</span>
    <span class="delete-word-btn">
        <!-- :O -->
        <button on:click={() => {
            delete_(uniqueId)
            dispatch("delete", {msg: `deleted word ${word} - ${uniqueId}`})
        }}>Delete</button>
    </span>
</div>

<style>
    .word-wrapper {
        width: 50%;
        height: 50px;
        border-bottom: 1px solid black;
        border-radius: 5px;
        font-size: 18px;
        margin-top: 5px;
    }
    button {
        background-color: #ff5050;
        color: #fff;
        transition: .4s;
        cursor: pointer;
        font-size: 14px;
        border: none;
        border-radius: 5px;
        width: 8vw;
        height: 3vh;
    }
    button:hover {
        background-color: #fa3232;
    }
    .word {
        font-size: 16px;
        font-weight: 500;
    }
    .meaning {
        font-size: 16px;
        font-weight: 800;
    }
    .lang {
        color: #fff;
    }
    .fr, .ru, .en{
        background-color: #7575e9;
    }
    .tr, .ch, .ja {
        background-color: #ff1818;
    }
    .es, .de, .in {
        background-color: #ff4500;
    }
    .ar {
        background-color: #055f05;
    }
</style>