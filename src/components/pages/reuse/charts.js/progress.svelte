<script>
    // your script goes here
    export let color
    export let text
</script>

<style>
 .progress{
    position: relative;
    padding: 2px;
    /* padding-bottom: 5px; */
    /* display: flex; */

 }
 span{
    position: absolute;
    top: 30%;
    display: block;
    text-align: center;
    left: 10%;
    color: #fff;
 }
    progress {
  border-radius: 7px; 
  width: 100%;
  height: 40px;
  margin-left: -11.5%;
 
      /* padding-bottom: 5px; */

  /* box-shadow: 1px 1px 4px rgba( 0, 0, 0, 0.2 ); */
  
}
progress::-webkit-progress-bar {
  background-color: transparent;
  border-radius: 7px;
}

progress:nth-of-type(even)::-webkit-progress-value{
  background-color: #FF993A ;

}
progress:nth-of-type(odd)::-webkit-progress-value{
  background-color: #FF993A ;

}
progress::-webkit-progress-value {
  background-color: #FF993A ;
   border-radius: 7px;
  /* box-shadow: 1px 1px 5px 3px rgba( 255, 0, 0, 0.8 ); */
}
progress::-webkit-progress-value {
  background-color: #FF993A ;
   border-radius: 7px;
  /* box-shadow: 1px 1px 5px 3px rgba( 255, 0, 0, 0.8 ); */
}
progress::-moz-progress-bar {
  /* style rules */
}
</style>
<div class="progress">
    <span>{text}</span>
    <progress value="100" max="100"></progress>

</div>



<!-- markup (zero or more items) goes here -->