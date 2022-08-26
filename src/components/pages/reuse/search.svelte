<script>
    // your script goes here
    import search from "../../../assets/search.png"
</script>

<style>
    /* your styles go here */
    .topsearch{
        position: relative;
    }
    .topsearch input,input{
        width: 300px;
        background-color: #fff;
    }
    .searchbar{
        position: relative;

    }
    .icon{
        height: 15px;
    }
   
    .searchbar img{
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
<div class="topsearch">
    <div class="searchbar">
        <img src={search} alt="" srcset="" class="icon" >
        <input type="text" placeholder="Search">
        <!-- {name} -->
    </div>

</div>



<!-- markup (zero or more items) goes here -->