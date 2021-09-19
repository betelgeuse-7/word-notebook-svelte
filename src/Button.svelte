<script>
    export let text
    export let type
    export let id = Math.random()
</script>

<button {type} {id}>{text}</button>

<style>
    button {
        border: none;
        border-radius: 5px;
        width: 10vw;
        height: 5vh;
        background-color: #34b1fa;
        color: #fff;
        transition: .4s;
        cursor: pointer;
        font-size: 16px;
    }
    button:hover {
        background-color: rgb(2, 151, 238);
    }
</style>