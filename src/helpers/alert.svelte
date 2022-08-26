<script>
    // your script goes here
    export let message = "i am a message";

</script>

<style>
    .responsetext{
    background-color: #a48555;
    font-size: 16px;
    font-weight: 200;
    color: #fff;
    padding: 6px;
    width: 50%;
    border-radius: 5px;
    }
</style>
<span class="responsetext" on:click>{message}</span>

<!-- markup (zero or more items) goes here -->