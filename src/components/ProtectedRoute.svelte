<script>
    import { Route,Link, navigate } from "svelte-routing";
    import DeniedPage from './DeniedPage.svelte';
    import Login from "./Login.svelte";
    import {token} from '../store';
   

    export let path;
    export let component;
    $: isAuthenticated = $token

    if(!isAuthenticated){
        // window.location.replace("/")
    }

    
</script>
{#if isAuthenticated}
    <Route path={path} component={component} />
{:else}
    <Route path={path} component={Login} />
{/if}