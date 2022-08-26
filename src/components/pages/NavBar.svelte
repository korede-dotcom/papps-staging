<script>
    // your script goes here
 
   import {Link} from 'svelte-routing';
   import { links } from './nav';
   import logo from '../../assets/Ellipse 1.png';
   import Menu from "carbon-icons-svelte/lib/Menu.svelte";
   import Close from "carbon-icons-svelte/lib/Close.svelte";
   import test from '../../assets/logo.png'
   import {onMount} from "svelte";
   $:current = window.location.pathname;

 
</script>

<div class="nav">
    <Link to="/payment">
        <div class="logotext">
            <img src={logo} alt="ccc" class="logo">
            <h4>Papps Switch</h4>
        </div>
    </Link>
    
   <div class="links">
       {#each links as link (link.name)}
       <Link to={link.url} class="link">
        <div class={ current === link.url ? 'active linkitems ' :'linkitems'} >
                    <img src={link.img} alt="ccc" class={ current === link.url ? "linkicon changeicon" : "linkicon"}>
                    <p class="linktext">{link.name}</p>
                </div>
            </Link>
            {/each} 
   </div>
</div>

<style>
    .active{
        background-color: #FF993A;
        color: #fff;
    }
    .changeicon{
      filter: contrast(500);
    }
    /* your styles go here */

  .nav{
    background-color: #fff;
    height: 100vh;
    width: 280px;
    overflow-x: hidden;
    transition: 0.3s;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 900px) {
    .nav{
        display: none !important;
    }
  }
 
.links{
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
  

  .linkitems{
    display: flex;
    align-items: center;
    gap: 30px;
    padding-block: 10px;
    font-weight: 200;
    font-size: 13px;
    padding: 10px;
    border-radius: 6px;
    margin: 10px;
    
 
  }
  .linkitems:hover{
    background-color: #c08c3f18;
    color: #fff;
  }
  .logo{
    width: 100px;
    height: 100px;
    object-fit: cover;
    
  }
  .logotext{
    display: flex;
    align-items: center;
   
  }
 
    .logotext h4{
        color: #FF993A;
    font-weight: 700 !important;
    }
  .linktext{
    font-size: 15px;
    font-weight: 200;
   
  }
  
  .linkitems:hover{
    background-color: #FF993A;
  }
  .linkitems:hover > .linkicon{
    filter: contrast(500);
  }
  .linkicon{
    width: 25px;
    height: 25px;
    object-fit: contain;
  }
 
 

    @media (max-width: 600px) {
        /* .menu{
            display: block;
        } */
    }
</style>
