<script>
    import filter from '../../../assets/filters.png'
    import searchb from '../../../assets/searchb.png'
    import searchw from '../../../assets/searchw.png'
    import search from '../../../assets/search.png'
    import home from '../../../assets/home.png'
    import { links } from '../nav';
    import {Link} from 'svelte-routing';
    import { onMount } from 'svelte';
    import {data} from "../../../store";
    import Search from './search.svelte';
    export let title = "Payment List"


    let TableData ;


    data.subscribe(value => {
        $:TableData = value.slice(0,10);
    });

    let allTableData 
    data.subscribe(value => {
        $:allTableData = value;
    });

        
    let showFilterOptions ;
    let placeholder = 'hello world';
    let options = [{
        label: "Option 1",
        value: "option1"
    }, {
        label: "Option 2",
        value: "option2"
    }, {
        label: "Option 3",
        value: "option3"
    }];

    let selectedValue = "";

    onMount(() => {
        showFilterOptions = false
        console.log(data)
    });

    $: showFilterOptions = false
    function showFilter () {
        showFilterOptions = !showFilterOptions
    }
  
    $:current = window.location.pathname;

    $:status = true

    function findInValues(e) {
        
        const search = e.target.value.toLowerCase();
        if (search.length > 0) {
            let searchResult = allTableData.filter(item => {
                return Object.values(item).some(value => value.toString().toLowerCase().includes(search));
            });
            $:TableData = searchResult
        } else {
            data.subscribe(value => {
               $:TableData = value.slice(0,10);
           });
        }
       
        
}

    // search TableData
    function searchTableData (e) {
        if(e.target.value.length > 0){ 
        let searchValue = e.target.value
        let searchResult = TableData.filter(item => {
            return item.Country.toLowerCase().includes(searchValue.toLowerCase())
        })
        $:TableData = searchResult
     }
        else{
            data.subscribe(value => {
               $:TableData = value.slice(0,10);
           });
        }
        
        
    }
    
    function searchBankTableData (e) {
        if(e.target.value.length > 0){ 
        let searchValue = e.target.value
        let searchResult = TableData.filter(item => {
            return item.BankID.toString().includes(searchValue.toString())
        })
        $:TableData = searchResult
     }
        else{
            data.subscribe(value => {
               $:TableData = value.slice(0,10);
               TableData = value;
           });
        }
    }


</script>


<div class="content_details">
    <div class="menuicon">
        <!-- <img class="icon" src={home} alt="home" on:click={()=>window.location.href='/'}>
        {window.location.pathname} -->
    
            <!-- {#each links as link (link.name)}
            <Link to={link.url} class="link">
             <div class={ current === link.url ? 'active linkitems ' :'linkitems'} >
                         <img src={link.img} alt="ccc" class={ current === link.url ? "linkicon changeicon" : "linkicon"}>
                         <p class="linktext">{link.name}</p>
                     </div>
                 </Link>
                 {/each}  -->
        
    </div>
    <div class="topsearch">
        <!-- <Search/> -->
        <!-- <div class="searchbar">
            <img src={search} alt="" srcset="" class="icon" >
            <input type="text" placeholder="Search">
        </div> -->
        <!-- {name} -->

    </div>
    <div class="paymentList">
        <h4>{title}</h4>
        <div class="table">
            <div class="filters">
                <div class="filter" on:click={showFilter}>
                    <img src={filter} class="icon" alt="" srcset="">
                    <h5>Filters</h5>
                </div>
                <div class="">
                    <p>Bank ID</p>
                </div>
                <div class="">
                    <p>Country</p>
                </div>
                <div class="">
                    <p>Currency</p>
                </div>
                <div class="">
                    <p>Date</p>
                </div>
                <div class="">
                    <p>Status</p>
                </div>
                <div class="searchbar">
                    <img src={search} alt="" srcset="" class="icon">
                    <input type="text" placeholder="Search" on:keyup={findInValues} >
                </div>
            </div>
            {#if showFilterOptions}
            <div class="options_container">
                <div class="options">
                   <div class="senderbank bankoptions">
                       <p>Sender's Bank</p>
                       <div class="searchinput">
                           <input type="text" placeholder="Enter Bank Name" on:keyup={searchBankTableData}>
                           <img src={searchb} alt="" srcset="">
                       </div>
                   </div>
                   <div class="receiverbank bankoptions">
                       <p>Receiver's Bank</p>
                       <div class="searchinput">
                           <input type="text" placeholder="Enter Bank Name" on:keyup={searchTableData}>
                           <img src={searchb} alt="" srcset="">
                       </div>
                   </div>
                   <div class="session bankoptions">
                       <p>Session</p>
                       <select bind:value={selectedValue}>    
                           {#if placeholder}
                               <option value="" disabled selected>{placeholder}</option>
                           {/if}
                           {#each options as option}
                               <option value={option.value}>
                                   {option.label || option.text}
                               </option>
                           {/each}
                       </select>
                   </div>
               </div >
               <div class="searchbtncontainer">
                   <button class="searchbtn">
                       <img src={searchw} alt="gg" class="icon">
                       <p>Search</p>
                   </button>
               </div>
            </div>
                <!-- <div class=""> -->
                <!-- </div> -->
            {/if}
            <!-- vreate table row colum-->
            <div class="tablecontent">
            <table>
                    <thead> 
                       <tr>
                           <th>bankID</th> 
                           <th>Merchant Transaction ID</th>
                           <th>Date & Time</th>
                           <th>Amount</th>
                           <th>Currency</th>
                           <th>Status</th>
                           <th>Method</th>
                           <th>Method Transaction<br>ID/ ARN</th>
                           <th>Country</th>
                           <th>Action</th>
                       </tr>
                   </thead>
    
                    <tbody>
                   
                        {#each TableData as item (item.DateTime)}
                        <tr>
                            <td><span>{item.BankID}</span></td>
                            <td><span>{item.MerchantTransactionId}</span></td>
                            <td><span>{item.DateTime.getYear()}</span></td>
                            <td><span>{item.Amount}</span></td>
                            <td><span>{item.Currency}</span></td>
                            <td><span class={(item.Status === 'success') ? 'status' : (item.Status === 'failed') ? 'failed' : (item.Status === 'cancelled') ? 'failed' : ''}>{item.Status}</span></td>
                            <td><span>{item.Method}</span></td>
                            <td><span>{item.MethodTransactionId}</span></td>
                            <td><span>{item.Country}</span></td>
                            <td><span class="action">{item.Action}</span></td>
        
                        </tr>
                        {/each}
                    </tbody>
                    <!-- content here -->
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th> </th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>＜</th>
                            <th>1</th>
                            <th>＞</th>
                            <th>{TableData.length}</th>
                        </tr>
                      
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>

<style>
    .searchbar{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
     
    }
    .searchbar img{
        position: absolute;
        left: 12px;
        top: 10;
        z-index: 1;
    }
    .content_details{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        padding: 20px;
        align-items: center;
    }
    /* @media (max-width: 768px) {
        .container{
            grid-template-columns: 1fr;
        }
        .nav{
            display: none;
        }
        .content{
            margin-left: 0;
        }
    } */
    .topsearch{
        grid-column: 3 / 4;
    }
    .topsearch input,input{
        background-color: #fff;
    }
    .searchinput{
        position: relative;
    }
    .searchinput img{
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
    .menuicon{
        grid-column: 1 / 2;
    
    }
    .paymentList{
        grid-column: 1 / 4;
        grid-row: 2 / 3;
        border-radius: 10px;
        background-color: #fff;
        border: 1px solid #c8c8c8;
        height: 100%;
    }
    .paymentList h4{
        padding: 10px; 
    }
    .table{
        padding: 10px;
        max-height: 650px;
        border-top: 1px solid #c8c8c8;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        gap: 20px;
        overflow-y: scroll;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

       
    }
    .filters{
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
        position: sticky;
    top: 0;
    z-index: 1;
       
    }
    @media (max-width: 768px) {
        .filters{
            flex-wrap: wrap;
        }
        .table{
            padding: 0;
        }
    }
    p{
        font-size: 15px;
        font-weight: bold;
        padding:10px 15px;
    }
    .filters p{
        font-size: 15px;
        font-weight: 200;
        padding:10px 15px;
    }
    .filters p:hover,.filters p:focus,.filters p:active{
        background-color: #EAEAEA;
        color: #FF993A;
        cursor: pointer;
        border-radius: 10px;
    }
    .filtersactive{
        background-color: #EAEAEA;
        color: #FF993A;
        cursor: pointer;
        border-radius: 10px;
    }
  

    .filter{
        display: inline-flex;
        gap: 5px;
        padding: 8px;
        border-radius: 6px;
        border: 1px solid #F3F2F2;
        background-color: #fff;
        color: #000;
        border-bottom:3px solid #FF993A;
        cursor: pointer;
    }
    .icon{
        width: 15px;
        height: 15px;
       object-fit: contain;
    }
    .options{
        margin-top: 10px; 
        width: 100%;
        gap: 20px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        line-height: 2;
        position: sticky;
        top: 0;
        
        transition: all 0.3s ease-in-out;
    }
    .bankoptions{
        display: flex;
        /* align-items: end; */
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
     
        cursor: pointer;
    }
    .options_container{
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        width: 100%;
        /* height: 20%; */
        gap: 20px;
        display: grid;
        grid-template-columns:1fr 300px ;
        line-height: 2;
        transition: all 0.3s ease-in-out;
        position: relative;
    }
    @media (max-width: 768px) {
        .options_container{
            grid-template-columns:1fr;
            place-items: center;
        }
        .action{
            font-size: 10px !important;
        }
    }
    .searchbtncontainer{
        display: inline-flex;
        justify-content: center;
    }
    .searchinput img{
        width: 15px;
        height: 16px;
        object-fit: contain;

    }
    .status{
        color: #fff;
        background-color: #1DC9B7;
        /* font-weight: bold; */
        border-radius: 10px;
        padding-block: 10px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        
        
    }
    .failed{
        width: 80px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: #FF993A;
        /* font-weight: bold; */
        border-radius: 10px;
        padding-block: 10px;
    }
    .action{
        background-color: #FF993A;
        padding: 10px;
        color: #fff;
        border-radius: 10px;
    }
    
    select{
        width: 100%;
        border: 1px solid #c8c8c8;
        border-radius: 6px;
        padding: 15px;
        padding-left: 20px;
        height: 30px;
        background-color: #EAEAEA;
        color: #000;
        outline: none ;
        /* outline-color: #FF993A; */
    }
    .searchbtn{
       
        /* display: flex; */
        align-items: center;
        /* justify-content: flex-end; */
        /* border: 1px solid #c8c8c8; */
        border-radius: 6px;
        display: flex; 
        height: 40px;
        width: 40%;
                
    
    }

    /* style table with border */
    table{
        padding: 30px;
        border: 1px solid #c8c8c8;
        width: 100%;
        border-top: 1px solid #c8c8c8;
        /* background-color: #fff; */
        overflow-x: scroll;
        text-align: center;
        /* height: 100%; */
        position: relative;
        z-index: 1;
        
    }
    .tablecontent{
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; */
        width: 100%;
        /* height: 30vh; */
        overflow-y: scroll;
        overflow-x: scroll;
        position: relative;
        border-top: 3px solid #FF993A;

    }
    thead{
        position: sticky;
        top: 0;
        border-top: 1px solid #FF993A;
        padding-top: 0;

    }
    tfoot{
        position: sticky;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px solid #FF993A;
        padding-bottom: 0;
        background-color: #c8c8c8;
        z-index: 1;
    }
    tbody{
        height: 50%;
        overflow: hidden;
    }
    
    table tr{
        border-bottom: 1px solid #c8c8c8;
        
    }
    table tr th{
        border-radius: 5px;
        padding-block: 10px;
        border-bottom: 1px solid #c8c8c8;
        border-right: 1px solid #c8c8c8;
        /* border-top: 3px solid #FF993A; */

        background-color: #F3F2F2;
        color: #000;
        font-weight: bold;
    }
    table tr td{
        padding: 15px;
        border-bottom: 1px solid #c8c8c8;
        border-right: 1px solid #c8c8c8; 
        background-color: #fff;
        color: #000;
        font-weight: lighter;
    }
    table tr:nth-of-type(odd){
        background-color: #F3F2F2;
    }
    
   
    
</style>

<!-- markup (zero or more items) goes here -->