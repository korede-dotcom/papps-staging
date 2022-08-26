
<script>

    // your script goes here
    import NavBar from "./NavBar.svelte";
    import {links} from './nav';
    import { Grid, Row, Column } from "carbon-components-svelte";
    import { data } from './data.example'  
    import { Datatable } from 'svelte-simple-datatables';
    import TableFun from "./reuse/tableFun.svelte";   
    import {token} from "../../store";
    import Search from './reuse/search.svelte';
    import bb, {area, bar, zoom} from "billboard.js"
    import "billboard.js/dist/billboard.css";
    import Card from "./reuse/card.svelte"
    import { Line } from 'svelte-chartjs'
    import home from '../../assets/home.png'
    import LineChart from "./reuse/charts.js/line.svelte";
    import Navigator from "./reuse/navigator.svelte";
    import Progress from "./reuse/charts.js/progress.svelte";
    let name = '';
    let accessToken;

    token.subscribe(value => {
        accessToken = value;
    });
    console.log(accessToken)
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    fetch("https://papps-staging.herokuapp.com/financialInstitutionsList", {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

        
</script>

<style>
    .container{
        width: 100vw;
        height: 100vh;
        display: flex;
        grid-template-columns: 280px 1fr;
    }
    /* .nav{
        width: 30vw;
    } */
    .content{
        width: 100%;
        height: 100vh;
        background-color: #D9D9D9;
        overflow-y:scroll ;
        /* margin: 0 auto; */
        margin-left: 300px;
    }
    .card{
        padding: 20px;
        display: grid;
        gap: 20px;
        
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    }
    .card *{
        
    }
    .search-home{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        width: 100%;
        height: 10vh;
    }
    .charts{
        display: grid;
        /* grid-template-columns: repeat(auto-fit,minmax(60%,100px)); */
        grid-template-columns: 1fr 1fr 1fr;
        padding: 20px;
        gap: 20px;
        /* height: 30vh; */
    }
    .line{
        grid-row: 1/2;
        grid-column: 1/3;
        background-color: #fff;
        border-radius: 20px;
        padding: 10px;

    }

    .line-layer{
        /* width: 100%; */
        grid-column: 1/3;
        grid-row: 1/3;
        height: 100%;
        width: 100%;
        grid-column: 3/4;
        background-color: #fff;
        border-radius: 20px;
        padding: 10px;
    }
    .layer{
        padding: 10px;
    }
    .layer p{
        font-weight: bold;
        color:#00B3FE;
    }

    .line2{
        grid-column: 1/3;
        grid-row: 2/3;
        background-color: #fff;
        border-radius: 20px;
        padding: 10px;
    }
    .table{
        /* height: 100%; */
    }
    .list p{
        color: #000;
        font-weight: lighter;
        font-size: 10px;
    }
    
   
</style>


<div class="container">
    <div class="navbar">
        <NavBar />
    </div>
    <div class="content">
        <div class="search-home">
           <Navigator/>
           <Search/>
        </div>

        <div class="card">
            <Card borderColor="#FF993A" name="TRANSACTIONS" total="233575" />
            <Card borderColor="#FF993A" name="TOTAL INSTITUTIONS" total="466272"/>
            <Card borderColor="#FF993A" name="TOTAL EXCHANGES" total="64656865"/>
            <Card borderColor="#FF993A" name="TOTAL CURRENCY EXCHANGE" total="363738"/>
        </div>
        <div class="charts">
            <div class="line">
                <LineChart/>
            </div>
            <div class="line-layer">
                <div class="layer">
                    <p>Average  performance per Institutions</p>
                    <h6>Average Performance per day</h6>
                    <div class="list">
                        <p>List of Institutions</p>
                        <Progress color="blue" text="Exchange"/>
                        <Progress color="blue" text="Institution"/>
                        <Progress color="blue" text="Exchange"/>
                        <Progress color="blue" text="Institution"/>
                        <Progress color="blue" text="Exchange"/>
                        <Progress color="blue" text="Institution"/>
                        <Progress color="blue" text="Exchange"/>
                        <Progress color="blue" text="Institution"/>
                        
                 
                        <!-- <Progress color="blue"/> -->
                        <!-- <Progress color="red"/> -->
                    </div>
                </div>
            </div>
            <div class="line2">
                <LineChart/>
            </div>

        </div>
        <div class="table">
            <TableFun/>
        </div>
      
        <!-- <Search/> -->

    </div>
</div>
 

