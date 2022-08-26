<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  // import Img from './assets/Background.png'
  import { Router, Link, Route } from "svelte-routing";

  import Login from './components/Login.svelte';
  import ForgotPassword from './components/ForgotPassword.svelte';
  import ProtectedRoute from './components/ProtectedRoute.svelte';
  import Dashboard from './components/pages/Dashboard.svelte';
  import DeniedPage from './components/DeniedPage.svelte';
  import Refund from './components/pages/Refund.svelte'; 
  import Payouts from './components/pages/Payouts.svelte';
  import Preapproval from './components/pages/Preapproval.svelte';
  import {navigate} from 'svelte-routing';
 import { onMount } from 'svelte';

 ./assets/background.png

  export let url = "";
 
</script>


<Router url="{url}"> 
  <Route path="*" component={DeniedPage} />
    <Route path="/"><Login /></Route>
    <Route path="/forgot-password">
     <ForgotPassword/>
    </Route>
    <!-- <ProtectedRoute path="/protected" component={Dashboard}/> -->
    <ProtectedRoute path="/dashboard" component={Dashboard}/>
    <ProtectedRoute path="/refund" component={Refund}/>
    <ProtectedRoute path="/payouts" component={Payouts}/>
    <ProtectedRoute path="/pre-approval" component={Preapproval}/>
    
</Router>