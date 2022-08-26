<script>
    // your script goes here
    export let borderColor
    export let name
    export let total
    // export let borderColor
</script>

<style>
  
    /* .card{
        min-height: 100px;
        background: red;
        min-width: 50px;
    }
    .
    /* your styles go here */
.card-content{
    /* display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr)); */
    background: #fff;
    padding: 10px;
    height: 90px;
    width: 210px;
    border-width: 5.7766px;
    border: 10px solid #000;
    border-top: none;
    border-bottom: none;
    border-right:none ;
    border-radius: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    
    


} 
.card{
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.card p {
    font-size: 12px !important;
    color: #0078D4;
}
</style>
<div class="card-content" style="border-left-color:{borderColor}">
    <div class="card">
        <p>{name}</p>
        <h5> &#x20A6; {total}</h5>
    </div>

</div>




<!-- markup (zero or more items) goes here -->