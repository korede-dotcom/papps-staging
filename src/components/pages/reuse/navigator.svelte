<script>
    // your script goes here
    import home from '../../../assets/home.png'

</script>

<style>
     .icon{
        width: 15px;
        height: 15px;
       object-fit: contain;
    }
    /* your styles go here */
</style>
<div class="">
    <img class="icon" src={home} alt="home" on:click={()=>window.location.href='/'}>
    {window.location.pathname}
</div>
<!-- markup (zero or more items) goes here -->