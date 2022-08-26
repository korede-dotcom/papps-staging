<script>
    // your script goes here

    import "carbon-components-svelte/css/all.css";
    import { Grid, Row, Column } from "carbon-components-svelte";
    import landinglogo from '../assets/landinglogo.png'
    import mail from '../assets/mail.png'
    import lock from '../assets/lock.png'
    export let herotext = 'Welcome Back!';
    export let herowords = 'To keep connected with us please <br>login with your personal info';
    export let title = 'PAPPS Switch';
    export let link = '/forgot-password';
    export let linktext = 'Forgot Password?';
    import './styles/login.css';
    import {Link} from "svelte-routing";
    import {navigate} from 'svelte-routing';
    import {onMount} from "svelte";
    import { text } from "svelte/internal";

    onMount(() => {
        console.log('mounted')
        document.querySelectorAll('a').forEach(a => {
           a.style.color = '#000';
           a.style.textDecoration = 'none';
        });
        
    });
    let username = '';
    let password = '';
    let isLoading = false;
    // reactive 
    // $: data = []
    const login = async (e) => {
        console.log(username, password);
        e.preventDefault()
        isLoading = true;
        const response = await fetch('https://papps-staging.herokuapp.com/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const data = await response.json()
        console.log(data)
        if(data.token){
            localStorage.setItem('token', data.token)
            navigate("/dashboard")
        }
       
       
    }

</script>

<style>

</style>
<Grid noGutterLeft>
    <Row>
      <Column class="side1" noGutter sm={0} md={4} lg={8}>
        <img src="{landinglogo}" alt="logo" class="logo" />
        <div class="company">
            <div class="landingtext">
                <h1>{@html herotext}</h1>
                <p>{@html herowords}</p>
            </div>
        </div>
    </Column>
      <Column>
        <div class="formcontainer">
            <form on:submit={login}>
                <h1>{title}</h1>
                <div class="group">
                    <div class="email">
                        <input type="email" placeholder="Email" bind:value={username} required autocomplete="email">
                        <img src="{mail}" alt="logo" class="inputIcon" />
                    </div>
                    <div class="pass">
                        <input type="password" placeholder="Password" bind:value={password} required autocomplete="password">
                        <img src="{lock}" alt="logo" class="inputIcon" />
                    </div>
                    <div class="check">
                        <input type="checkbox">
                        <span>keep me signed in</span>
                    </div>
                    <div class="btn">
                        <!-- <Link to="/payment"> -->
                            <button  >
                               {isLoading ? "loading" : "login"}
                            </button>
                            <!-- </Link> -->
                    </div>
                </div>
                <Link to={link} class="link">{linktext}</Link>
            </form>
        </div>


            
        </Column>
    </Row>
  </Grid>


<!-- <div class="side1">

</div> -->
<!-- markup (zero or more items) goes here -->