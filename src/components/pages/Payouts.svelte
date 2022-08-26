<script>
    // your script goes here
    import NavBar from "./NavBar.svelte";
    import {links} from './nav';
    import { Grid, Row, Column } from "carbon-components-svelte";
    import { data } from './data.example'  
    import { Datatable } from 'svelte-simple-datatables';
    import TableFun from "./reuse/tableFun.svelte";   
 
    
</script>

<style>
    .container{
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 280px 1fr;
       
    }
    /* .nav{
        width: 30vw;
    } */
    .content{
        width: 100%;
        height: 100%;
        background-color: #D9D9D9;
        margin-left: 300px;
    }
   
   
</style>

<div class="container">
    <div class="navbar">
        <NavBar />
    </div>
    <div class="content">
        <TableFun  title={'Payouts'}/>
    </div>
    
   
</div>
 

