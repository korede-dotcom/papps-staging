<script>
    // your script goes here
    import { Grid, Row, Column } from "carbon-components-svelte";
    import landinglogo from '../assets/landinglogo.png'
    import mail from '../assets/mail.png'
    import lock from '../assets/lock.png'
    export let herotext = 'Reset Your Password';
    export let herowords = 'To keep connected with us please <br>login with your personal info';
    export let title = 'PAPPS Switch';
    export let link = '/';
    export let linktext = 'GO back Home';
    import './styles/login.css';
    import Alert from "../helpers/alert.svelte";
    import {Link} from "svelte-routing";
    let showAlert = true;
    function happen(e) {
   
       showAlert = false
    }


</script>

<style>
   

  
</style>
<Grid noGutterLeft>
    <Row>
      <Column class="side1" noGutter>
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
            <form on:change={(e) => e.preventDefault()}>
                <h1>{title}</h1>
               
                <div class="group">
                    <div class="email">
                        <input type="email" placeholder="Email">
                        <img src="{mail}" alt="logo" class="inputIcon" />
                    </div>
                    <br>
                    <div class="btn">
                        <button>Confirm</button>
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