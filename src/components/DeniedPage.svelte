<script>
    import {onMount} from 'svelte';
    import {token} from '../store';
    // your script goes here
    import {Link,navigate} from 'svelte-routing';

    onMount(() => {
        let token = localStorage.getItem('token');
        if (!token) {
            // navigate('/');
            window.location.href = '/';
            
        }
    });
</script>

<div class="errorpage">
    <div class="error">
        <h1>403</h1>
        <h2>Forbidden</h2>
        <p>You are not authorized to access this page.</p>
        <Link to="/" class="link">Go back to home</Link>
    </div>
</div>

<style>
    /* your styles go here */
    .errorpage{
        
        height: 100vh;
        width: 100%;
        background-color: #C08D3F;
        background-size: contain;
        display: grid;
        place-items: center;
    }
    .error h1{
        font-size: 50px;
        font-weight: 200;
        color: #fff;
        margin-bottom: 0;
    }
    .error p{
        font-size: 20px;
        font-weight: 200;
        color: #fff;
        margin-bottom: 0;
    }
    .error link{
        font-size: 20px;
        font-weight: 200;
        color: #fff;
        margin-bottom: 0;
    }
</style>




<!-- markup (zero or more items) goes here -->